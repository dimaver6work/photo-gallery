import React from 'react'

export const arrowPath = `M0.000488281 10.263L4.59414 5.5L0.000488281 0.737L0.710054 0L6.00049 5.50275L0.710054 11L0.000488281 10.263Z`
export const doublePath = [
  `M0.000488281 10.263L4.59414 5.5L0.000488281 0.737L0.710054 0L6.00049 5.50275L0.710054 11L0.000488281 10.263Z`,
  `M3.00049 10.263L7.59414 5.5L3.00049 0.737L3.71005 0L9.00049 5.50275L3.71005 11L3.00049 10.263Z`
]
export const getSvgIcon = (path, reverse, type, currentColor) => {
  const paths = Array.isArray(path) ? path : [path]
  const renderPaths = paths.map((p, i) => {
    return <path key={i} d={p} />
  })
  return (
    <i
      className={`custom-icon-${type}`}
      style={{
        fontSize: '16px'
      }}
    >
      <svg
        viewBox='0 0 9 11'
        width='9'
        height='11'
        fill={currentColor}
        style={{
          verticalAlign: '-.125em',
          transform: `rotate(${(reverse && 180) || 0}deg)`
        }}
      >
        {renderPaths}
      </svg>
    </i>
  )
}
