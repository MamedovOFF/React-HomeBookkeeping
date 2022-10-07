import ReactApexChart from 'react-apexcharts'
import { useMemo } from 'react'

const Convert = () => {
  const options = useMemo(
    () => ({
      options: {
        chart: {
          animations: {
            enabled: false,
          },
          id: 'basic-bar',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    }),
    [],
  )
  return (
    <div className="d-flex justify-content-center mt-5 flex-wrap">
      <ReactApexChart options={options.options} series={options.series} type="bar" width="500" />
      <ReactApexChart options={{}} series={[44, 55, 41, 17, 15]} type="donut" width="380" />
    </div>
  )
}

export default Convert
