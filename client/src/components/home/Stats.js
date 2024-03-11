import React from 'react'

function Stats() {
  return (
    <div className="stats shadow bg-neutral text-neutral-content mx-auto mt-6 flex flex-col gap-1 md:inline-grid">
      <div className="stat place-items-center">
        <div className="stat-title text-neutral-content">Blogs</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc text-neutral-content">
          From January 1st to February 1st
        </div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-success">4,200</div>
        <div className="stat-desc text-success">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-neutral-content">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc text-neutral-content">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}

export default Stats