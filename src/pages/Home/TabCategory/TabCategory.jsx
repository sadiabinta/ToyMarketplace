import { useState } from "react";


const TabCategory = () => {
    const [activeTab, setActiveTab] = useState("remote");
    return (
        <div className="tabs">
  <a className="tab tab-lg tab-lifted">Large</a> 
  <a className="tab tab-lg tab-lifted tab-active">Large</a> 
  <a className="tab tab-lg tab-lifted">Large</a>
</div>
    );
};

export default TabCategory;