'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var barX = CLOUD_X + BAR_WIDTH;
var barY = CLOUD_Y * 2 + BAR_HEIGHT;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx) {
  ctx.font = '16px PT MONO';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 40);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var axisX = (CLOUD_X + GAP) * i + barX;

    ctx.fillStyle = 'black';
    ctx.fillText(players[i], axisX, CLOUD_HEIGHT + GAP * 2);
    ctx.fillText(Math.round(times[i]), axisX, BAR_HEIGHT - CLOUD_Y + GAP);

    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0 , 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';

    ctx.fillRect(axisX, barY + GAP * 2, BAR_WIDTH, -((BAR_HEIGHT * times[i]) / maxTime));
  }
};
