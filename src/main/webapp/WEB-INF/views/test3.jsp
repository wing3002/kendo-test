<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Test</title>
	<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.common.min.css">
	<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.default.min.css">
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script src="https://kendo.cdn.telerik.com/2021.2.616/js/kendo.all.min.js"></script>
	
	<script>
		$(document).ready(function() {
			// 그리드 데이터 생성
			var data = [
				{ year: "2010", value: 1000 },
				{ year: "2011", value: 1200 },
				{ year: "2012", value: 1500 },
				{ year: "2013", value: 1800 },
				{ year: "2014", value: 2000 },
				{ year: "2015", value: 2200 },
				{ year: "2016", value: 2500 },
				{ year: "2017", value: 2800 },
				{ year: "2018", value: 3000 },
				{ year: "2019", value: 3200 }
			];
			
			// 그리드 설정
			$("#grid").kendoGrid({
				dataSource: {
					data: data,
					schema: {
						model: {
							fields: {
								year: { type: "string" },
								value: { type: "number" }
							}
						}
					}
				},
				height:"300px",
				pageable: {
					pageSize: 10
					},
					columns: [
					{ field: "year", title: "년도", width: "50px" },
					
					
					{ field: "value", title: "값", width: "100px" }
]
});
			// 검색 버튼 클릭 시 이벤트 처리
			$("#searchBtn").click(function() {
				var startYear = $("#startYear").val();
				var endYear = $("#endYear").val();
				var filteredData = [];
				for (var i = 0; i < data.length; i++) {
					var year = data[i].year;
					if (year >= startYear && year <= endYear) {
						filteredData.push(data[i]);
					}
				}
				
				// 그리드 데이터 업데이트
				var grid = $("#grid").data("kendoGrid");
				grid.dataSource.data(filteredData);
				
				// 막대그래프 및 도넛그래프 데이터 업데이트
				var chartData = [];
				for (var i = 0; i < filteredData.length; i++) {
					chartData.push({ category: filteredData[i].year, value: filteredData[i].value });
				}
				updateChart(chartData);
			});
			
			// 차트 초기 설정
			var chart = $("#chart").kendoChart({
				title: {
					text: "S&P500 지수"
				},
				legend: {
					visible: false
				},
				seriesDefaults: {
					type: "column" 
				},
				series: [{
					name: "값",
					data: [{ category: "2010", value: 1000 }]
				}],
				valueAxis: {
					labels: {
						format: "{0}"
					},
					line: {
						visible: false
					},
					axisCrossingValue: 0
				},
				categoryAxis: {
					field: "category",
					majorGridLines: {
						visible: false
					}
				},
				tooltip: {
					visible: true,
					format: "{0}"
				}
			}).data("kendoChart");
			
			// 차트 데이터 업데이트 함수
			function updateChart(chartData) {
				// 막대그래프 데이터 업데이트
				chart.options.series[0].data = chartData;
				chart.refresh();
				
				// 도넛그래프 데이터 업데이트
				var donutChartData = [];
				for (var i = 0; i < chartData.length; i++) {
					donutChartData.push([chartData[i].category, chartData[i].value]);
				}
				var donutChart = $("#chart2").data("kendoChart");
				donutChart.options.series[0].data = donutChartData;
				donutChart.refresh();
			}
			
			// 도넛그래프 설정
			$("#chart2").kendoChart({
				title: {
					text: "S&P500 지수"
				},
				legend: {
					position: "bottom"
				},
				chartArea: {
					background: ""
				},
				seriesDefaults: {
					type: "donut",
					labels: {
						visible: true,
						template: "#= category #: #= kendo.format('{0:n0}', value) #"
					}
				},
				series: [{
data: [["2010", 1000]],
holeSize: 40
}],
tooltip: {
visible: true,
format: "{0}"
}
});
</script>
	
</head>
<body>
	<!-- 상단 검색조건 -->
	<div id="search">
		<label for="startYear">시작년도:</label>
		<input id="startYear" name="startYear" type="text" class="k-textbox" value="" />
		<label for="endYear">종료년도:</label>
		<input id="endYear" name="endYear" type="text" class="k-textbox" value="" />
		<button id="searchBtn" class="k-button">조회</button>
	</div>
	
	<!-- 중간 조회 결과 -->
	<div id="grid"></div>
	
	<!-- 하단 막대그래프 및 도넛그래프 -->
	<div id="chart"></div>
	

</body>

</html>

