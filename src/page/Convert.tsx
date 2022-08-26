import ReactECharts from 'echarts-for-react'

const Convert = () => {
  const option1 = {
    title: {
      text: '堆叠区域图',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  }
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  }

  return (
    <>
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
      <ReactECharts option={options} />
      <ReactECharts option={option1} style={{ height: 400 }} />
    </>
  )
}

export default Convert
