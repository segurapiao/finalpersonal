import React from 'react';
import './page.css';

function BusinessIntelligencePage() {
  return (
    <div className="card">
      <div className="container">
        <h1><strong>Project: Supply Chain Optimization</strong></h1><br/>
        <p className="description">
          <span className="highlight"><strong>Description:</strong></span><br/> Led initiatives to optimize supply chain processes and enhance efficiency. Implemented ERP systems for inventory management and logistics, resulting in cost savings and improved inventory control.
        </p><br/>

        <div className="achievements">
          <h2><strong>Key Achievements:</strong></h2>
          <ul>
            <li>Streamlined inventory management processes, reducing excess inventory by 20%.</li>
            <li>Led annual comprehensive inventories for a multi-million dollar stock inventory.</li>
            <li>Implemented process improvements resulting in additional revenue streams.</li>
          </ul>
        </div><br/>

        <div className="skills">
          <h2><strong>Skills Utilized:</strong></h2>
          <ul>
            <li>Supply chain management</li>
            <li>Process improvement</li>
            <li>Team leadership</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BusinessIntelligencePage;
