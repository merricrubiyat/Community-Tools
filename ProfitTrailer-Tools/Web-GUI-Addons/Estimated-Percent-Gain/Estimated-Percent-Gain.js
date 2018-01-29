function estimateYesterdayPercent() {
    var todayProfit = $("#mTodayProfit").text();
    var yesterdayProfit = $("#mYesterdayProfit").text();

    var previousTPV = $("#mTotalPendingVal").text() - todayProfit;

    console.log("yesterday tpv: " + previousTPV + ", yesterday profit: " + yesterdayProfit + ", todayProfit: " + todayProfit);
    var prevPercentCalc = (yesterdayProfit/(previousTPV - yesterdayProfit)*100).toFixed(2);
    var prevPercent = prevPercentCalc + '%';
    if (yesterdayProfit !== "")
    { 
        if ($("#mYesterdayProfitPCTValue").text() === "") {
        $("span.market-price-calculations.text-profityd").append('<br><label class="usd-value"><span class="full-text">Estimated Percent Gain&nbsp;</span><span class="short-text">Est. % Gain&nbsp;</span></label><span class="mb-0  main-text" id="mYesterdayProfitPCTValue" title="'+prevPercent+'">'+prevPercent+'</span>');
        } else {
            $("#mYesterdayProfitPCTValue").attr("title",prevPercent);
            $("#mYesterdayProfitPCTValue").text(prevPercent);
        }
    }
}

function estimatePercent() {
    var todayProfit = $("#mTodayProfit").text();
    var TPV = $("#mTotalPendingVal").text();
    var todayPercentCalc = (todayProfit/(TPV - todayProfit)*100).toFixed(2);
    var todayPercent = todayPercentCalc + '%';
    $(".usd-value").css({'margin-bottom':'0px'});
    if (todayProfit !== "")
    { 
        if ($("#mTodayProfitPCTValue").text() === "") {
        $("span.market-price-calculations.text-profittd").append('<br><label class="usd-value"><span class="full-text">Estimated Percent Gain&nbsp;</span><span class="short-text">Est. % Gain&nbsp;</span></label><span class="mb-0  main-text" id="mTodayProfitPCTValue" title="'+todayPercent+'">'+todayPercent+'</span>');
        } else {
            $("#mTodayProfitPCTValue").attr("title",todayPercent);
            $("#mTodayProfitPCTValue").text(todayPercent);
        }
    }
}

estimateYesterdayPercent();
$("body").on('DOMSubtreeModified', "#mYesterdayProfitUSDValue", function() {
	estimateYesterdayPercent();
});

estimatePercent();
$("body").on('DOMSubtreeModified', "#mTodayProfitUSDValue", function() {
	estimatePercent();
});