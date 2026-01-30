import React, { useEffect, useState } from "react";
import MobileCard from "../components/MobileCard";
import { useSelector } from "react-redux";


const filterItems = [
    {
        name: "Product Range",
        menu: ["Galaxy Z", "Galaxy S", "Galaxy A", "Galaxy M", "Galaxy F"]
    },
    {
        name: "Storage",
        menu: ["128 GB", "256 GB", "512 GB", "1 TB"]
    },
    {
        name: "Price",
        menu: ["$200-$300", "$300-$400", "$400-$500"]
    },
    {
        name: "Display Size",
        menu: ["5.5 - 6 inch", "6.1 - 6.5 inch", "6.6 - 7 inch", "7 inch & above"]
    },
    {
        name: "RAM Size",
        menu: ["4 GB", "6 GB", "8 GB", "12 GB", "16 GB"]
    },
    {
        name: "cellular Technology",
        menu: ["5G", "4G"]
    },
    {
        name: "battery Capacity",
        menu: ["3000 - 4000 mAh", "4001 - 5000 mAh", "5001 - 6000 mAh", "6000 mAh & above"]
    },
    {
        name: "processor",
        menu: ["Exynos", "Snapdragon"]
    },
    {
        name: "Processor Speed",
        menu: ["1.8 GHz - 2.5 GHz", "2.6 GHz - 3.0 GHz", "3.1 GHz & above"]
    }
];

export default function AppleSeries() {

    const modelName = useSelector(state => state.model.modelItems)

    console.log(modelName);

    const selectedModel = modelName[0]
    
    
    const [mobileData, setMobileData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        "Product Range": [selectedModel],
        "Storage": [],
        "Price": [],
        "Display Size": [],
        "RAM Size": [],
        "cellular Technology": [],
        "battery Capacity": [],
        "processor": [],
        "Processor Speed": []
    });
    

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setMobileData(data))
            .catch(err => console.error("Fetch error:", err));
    }, []);

    // Apply all filters
    const applyAllFilters = (data) => {
        return data.map(item => ({
            ...item,
            model: Array.isArray(item.model)
                ? item.model.filter(m => {
                    // For each filter, check if selected and if model matches
                    return Object.entries(selectedFilters).every(([filterName, selectedValues]) => {
                        if (selectedValues.length === 0) return true;
                        // For Storage, RAM Size, etc., check model property
                        if (typeof m === "object" && m[filterName]) {
                            return selectedValues.includes(m[filterName]);
                        }
                        // For Product Range, check item.name
                        if (filterName === "Product Range") {
                            return selectedValues.includes(item.name);
                        }
                        if (filterName === "Storage"){
                            return selectedValues.includes(m.storage)
                        }
                        if (filterName === "Display Size"){
                            return selectedValues.includes(m.display)
                        }
                        if (filterName === "RAM Size"){
                            return selectedValues.includes(m.Ram)
                        }
                        if (filterName === "Price"){
                            return selectedValues.includes(m.priceTag)
                        }
                        if (filterName === "cellular Technology"){
                            return selectedValues.includes(m.cellularTechnology)
                        }
                        if (filterName === "battery Capacity"){
                            return selectedValues.includes(m.batteryCapacity)
                        }
                        if (filterName === "processor"){
                            return selectedValues.includes(m.processor)
                        }
                        if (filterName === "Processor Speed"){
                            return selectedValues.includes(m.processorSpeed)
                        }
                        
                        return true;
                    });
                })
                : []
        }));
    };
    

    const filteredDataAll = applyAllFilters(mobileData);
    console.log(filteredDataAll);
    

    // Toggle filter menu open/close
    const handleFilterClick = (name) => {
        setFilter(prev =>
            prev.includes(name)
                ? prev.filter(f => f !== name)
                : [...prev, name]
        );
    };

    // Handle checkbox change for any filter
    const handleFilterChange = (filterName, menuItem, checked) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterName]: checked
                ? [...prev[filterName], menuItem]
                : prev[filterName].filter(v => v !== menuItem)
        }));
    };

    return (
        <>
            <h1 className="brand-name">samsung</h1>
            <div className="page">
                <div className="product-filter">
                    <div className="filter-menu">
                        {filterItems.map((item, index) => (
                            <div style={{ position: "relative" }} key={index}>
                                <button
                                    className={`filter-button ${filter.includes(item.name) ? 'active' : ''}`}
                                    onClick={() => handleFilterClick(item.name)}
                                >
                                    {item.name}
                                </button>
                                {filter.includes(item.name) && (
                                    <div className="menu">
                                        {item.menu.map((menuItem, idx) => (
                                            <label key={idx} className="menu-item">
                                                <input
                                                    type="checkbox"
                                                    name={menuItem}
                                                    id={menuItem}
                                                    className="menu-checkbox"
                                                    checked={selectedFilters[item.name]?.includes(menuItem) || false}
                                                    onChange={e => handleFilterChange(item.name, menuItem, e.target.checked)}
                                                />
                                                {menuItem}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product-card-container">
                    {filteredDataAll.map((item) =>
                        item.model.map((i, idx) => (
                            <MobileCard key={i.model || i.id || idx} data={i} />
                        ))
                    )}
                    
                </div>
            </div>
        </>
    );
}