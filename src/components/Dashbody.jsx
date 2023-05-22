import React, { useLayoutEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import TradingViewWidget, {Themes} from 'react-tradingview-widget'

const Dashbody = ({ link, setLink }, props) => {

      useLayoutEffect(() => {
    
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push( 
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      }) 
    );

    // Define data
    let data = [{
      category: "Research",
      value1: 1000,
    //   value2: 588
    }, {
      category: "Marketing",
      value1: 1200,
    //   value2: 1800
    }, {
      category: "Sales",
      value1: 850,
    //   value2: 1230
    }];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

          
    //  let data =  [{
    //   date: new Date(2021, 0, 1).getTime(),
    //   value: 1000
    // }, {
    //   date: new Date(2021, 0, 2).getTime(),
    //   value: 800
    // }, {
    //   date: new Date(2021, 0, 3).getTime()
    //   // value is missing
    // }, {
    //   date: new Date(2021, 0, 4).getTime(),
    //   value: 800
    // }, {
    //   date: new Date(2021, 0, 5).getTime(),
    //   value: 800
    // }]

    // Create series
    let series = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    connect: false
  })
);
    series.data.setAll(data);

    // let series2 = chart.series.push(
    //   am5xy.ColumnSeries.new(root, {
    //     name: "Series",
    //     xAxis: xAxis,
    //     yAxis: yAxis,
    //     valueYField: "value2",
    //     categoryXField: "category"
    //   })
    // );
    // series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);


  return (
      <div className='dashbody'>
          <div className="db-top">
              <div className="dbt-tab">
                  {/* $<Icon className='dashcon' icon="mdi:support" /> */}
                  <h1>$</h1>
                  <div className="dbt-cont">
                      <p>$ 0.00</p>
                      <span>General Wallet</span>
                  </div>
              </div>
              <div className="dbt-tab">
                  <Icon className='dashcon' icon="fa-solid:piggy-bank" />
                  <div className="dbt-cont">
                      <p>$ 0</p>
                      <span>Trade Wallet</span>
                  </div>
              </div>
              <div className="dbt-tab">
                  <Icon className='dashcon' icon="fa-solid:donate" />
                  <div className="dbt-cont">
                      <p>$ 0</p>
                      <span>Total Profit</span>
                  </div>
              </div>
              <div className="dbt-tab">
                  <Icon className='dashcon' icon="material-symbols:insert-chart" />
                  <div className="dbt-cont">
                      <p>0</p>
                      <span>Total Withdrawal</span>
                  </div>
              </div>
              <div className="dbt-tab">
                  <Icon className='dashcon' icon="material-symbols:insert-chart" />
                  <div className="dbt-cont">
                      <p>0</p>
                      <span>Trades</span>
                  </div>
              </div>
              <div className="dbt-tab">
                  <Icon className='dashcon' icon="material-symbols:check-circle" />
                  <div className="dbt-cont">
                      <p>0</p>
                      <span>Total Won</span>
                  </div>
              </div>
              <div className="dbt-tab">
                  <Icon className='dashcon' icon="mdi:close-circle" />
                  <div className="dbt-cont">
                      <p>0</p>
                      <span>Total Loss</span>
                  </div>
              </div>
          </div>
          <div className="db-section">
              <div id='chartdiv' className="dbs-left">
                  
              </div>
              <div className="dbs-right">
                  <div className="dbsr-btn">
                      <button>Start Trade</button>
                  </div>
                      <TradingViewWidget
                        symbol="NASDAQ:AAPL"
                        theme={Themes.DARK}
                        locale="fr"
                        autosize
                      />
              </div>
          </div>
          <div className="db-section">
              <div id='chartdiv' className="dbs-left-2">
                  <div className="db-lt">
                      <h2>Latest Trades</h2>
                      <p>Highest Gainers</p>
                  </div>
                  <div className="table-wrap">
                      <div className="db-table">
                          <div className='tr-id'>
                              <h3>Transaction ID</h3>
                          </div>
                          <div className="db-name">
                              <h3>Name</h3>
                          </div>
                            <div className="db-profit">
                                <h3>Profit</h3>
                          </div>
                            <div className="db-mart">
                                <h3>Market</h3>
                          </div>
                            <div className="db-at">
                                <h3>Auto-Trade</h3>
                          </div>
                      </div>
                      <div className="db-table">
                          <div className='tr-id'>
                              <p>Transaction ID</p>
                          </div>
                          <div className="db-name">
                              <p>Name</p>
                          </div>
                            <div className="db-profit">
                                <p>Profit</p>
                          </div>
                            <div className="db-mart">
                                <p>Market</p>
                          </div>
                            <div className="db-at">
                                <p>Auto-Trade</p>
                          </div>
                      </div>
                      <div className="db-table">
                          <div className='tr-id'>
                              <p>Transaction ID</p>
                          </div>
                          <div className="db-name">
                              <p>Name</p>
                          </div>
                            <div className="db-profit">
                                <p>Profit</p>
                          </div>
                            <div className="db-mart">
                                <p>Market</p>
                          </div>
                            <div className="db-at">
                                <p>Auto-Trade</p>
                          </div>
                      </div>
                </div>
              </div>
              <div className="dbs-right-2">
    
              </div>
          </div>
    </div>
  )
}

export default Dashbody;