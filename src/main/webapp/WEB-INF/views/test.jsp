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

  <!-- jQuery 파일 링크 -->
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

  <!-- kendo.all.min.js 파일 링크 -->
  <script src="https://kendo.cdn.telerik.com/2021.2.616/js/kendo.all.min.js"></script>


	
	<!-- 스타일 시트 -->
	<style>
		/* 검색조건 스타일 */
		#search-container {
			margin: 20px;
		}
		.search-label {
			display: inline-block;
			width: 100px;
			font-weight: bold;
		}
		.search-input {
			width: 150px;
			padding: 5px;
			border: 1px solid #ccc;
			border-radius: 3px;
			margin-right: 20px;
		}
		
		/* 그리드 스타일 */
		#grid-container {
			margin: 20px;
		}
		.k-grid {
			height: 400px;
		}
	</style>
	
	<style>
	#grid-container {
		height: 400px;
	}
	
	#grid {
		height: 100%;
	}
	</style>
	
	
</head>
<body>
	<div id="search-container">
		<label class="search-label">Start Date:</label>
		<input type="text" class="search-input" id="start-date" />
		<label class="search-label">End Date:</label>
		<input type="text" class="search-input" id="end-date" />
		<button id="search-button">Search</button>
	</div>
	
	<div id="grid-container"></div>
	
	<!-- 검색조건 및 그리드 데이터 -->
	<script>
	$(function() {

		  // 그리드 데이터
		  var data = [
		    { year: "2010", value: 1172.34 },
		    { year: "2011", value: 1257.64 },
		    { year: "2012", value: 1426.19 },
		    { year: "2013", value: 1848.36 },
		    { year: "2014", value: 2058.90 },
		    { year: "2015", value: 2043.94 },
		    { year: "2016", value: 2238.83 },
		    { year: "2017", value: 2695.81 },
		    { year: "2018", value: 2506.85 },
		    { year: "2019", value: 3230.78 }
		  ];

		  // 그리드 설정
		  var grid = $("#grid-container").kendoGrid({
		    dataSource: {
		      data: data,
		      filter: {
		        logic: "and",
		        filters: [
		          { field: "year", operator: "gte", value: "" },
		          { field: "year", operator: "lte", value: "" }
		        ]
		      },
		      sort: {
		        field: "year",
		        dir: "asc"
		      },
		      pageSize: 10
		    },
		    columns: [
		      { field: "year", title: "Year" },
		      { field: "value", title: "Value", format: "{0:c}" }
		    ],
		    pageable: true
		  }).data("kendoGrid");

		  // 검색 버튼 클릭 시 그리드 데이터 조회
		  $("#search-button").click(function() {
		    // 검색 조건 가져오기
		    var startDate = $("#start-date").val();
		    var endDate = $("#end-date").val();

		    // 그리드 필터링
		    grid.dataSource.filter({
		      logic: "and",
		      filters: [
		        { field: "year", operator: "gte", value: startDate },
		        { field: "year", operator: "lte", value: endDate }
		      ]
		    });
		  });
		});

		

	</script>
	
</body>
</html>
							