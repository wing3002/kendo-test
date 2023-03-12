<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Test Page</title>

  <!-- kendo ui의 스타일시트 파일 링크 -->
  <link href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.common.min.css" rel="stylesheet" />
  <link href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.default.min.css" rel="stylesheet" />

<!-- jQuery 링크 -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<!-- Kendo UI for jQuery 최신 버전 스크립트 링크 -->
<script src="https://kendo.cdn.telerik.com/2021.2.616/js/kendo.all.min.js"></script>

<style>
/* 화면 스타일 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  padding: 10px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.search-container label {
  font-weight: bold;
}

.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

/* 그리드 스타일 */
.k-grid {
  border: none;
}

.k-grid-header {
  background-color: #e9e9e9;
}

.k-grid td {
  text-align: center;
}

/* 막대그래프 스타일 */
.k-chart {
  height: 100%;
}

.k-chart .k-chart-series {
  background-color: #54728C;
}

</style>

</head>
<body>

<div class="grid-container">

  <div class="search-container">
    <label for="startYear">시작년도:</label>
    <input id="startYear" type="number" min="2010" max="2019" value="2010" />
    <label for="endYear">종료년도:</label>
    <input id="endYear" type="number" min="2010" max="2019" value="2019" />
    <button id="searchButton">조회</button>
  </div>

  <div id="grid"></div>

  <div class="chart-container">
    <div id="chart"></div>
    <div id="donut-chart"></div>    
  </div>

</div>

<script>
// 그리드 데이터
var gridData = [
  { year: "2010", value: "1150.45" },
  { year: "2011", value: "1282.62" },
  { year: "2012", value: "1426.19" },
  { year: "2013", value: "1848.36" },
  { year: "2014", value: "2058.90" },
  { year: "2015", value: "2043.94" },
  { year: "2016", value: "2238.83" },
  { year: "2017", value: "2673.61" },
  { year: "2018", value: "2775.60" },
  { year: "2019", value: "3240.02" }
];

//조회 버튼 클릭 시 그리드 생성
$("#searchButton").click(function() {
  var startYear = parseInt($("#startYear").val());
  var endYear = parseInt($("#endYear").val());

  // 그리드 데이터 필터링
  var filteredData = gridData.filter(function(data) {
    var year = parseInt(data.year);
    return year >= startYear && year <= endYear;
  });

  // 그리드 데이터 정렬
  filteredData.sort(function(a, b) {
    return parseFloat(b.value) - parseFloat(a.value);
  });

  // 그리드 생성
  $("#grid").kendoGrid({
    dataSource: {
      data: filteredData,
      schema: {
        model: {
          fields: {
            year: { type: "string" },
            value: { type: "number" }
          }
        }
      }
    },
    height: 300,
    scrollable: true,
    sortable: true,
    pageable: {
      pageSize: 10
    },
    columns: [
      { field: "year", title: "년도" },
      { field: "value", title: "값", format: "{0:n}" }
    ]
  });

//막대그래프 생성
  $("#chart").kendoChart({
    title: {
      text: "S&P500 지수"
    },
    legend: {
      visible: false
    },
    seriesDefaults: {
      type: "column",
      color: "#0066CC"
    },
    series: [{
      name: "값",
      data: filteredData.map(function(data) {
        return parseFloat(data.value);
      })
    }],
    valueAxis: {
      labels: {
        format: "{0:n0}"
      }
    },
    categoryAxis: {
      field: "year"
    }
  });
  
//도넛 그래프 생성
  $("#donut-chart").kendoChart({
    title: {
      text: "최대값 데이터"
    },
    legend: {
      visible: true,
      position: "bottom"
    },
    seriesDefaults: {
      type: "donut"
    },
    series: [{
      name: "값",
      data: filteredData.map(function(data) {
        return {
          category: data.year,
          value: parseFloat(data.value)
        };
      })
    }],
    tooltip: {
      visible: true,
      format: "{0}%"
    }
  });
});
</script>

</body>
</html>
