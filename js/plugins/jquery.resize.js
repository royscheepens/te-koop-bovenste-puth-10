resize = {
  initialize: function() {
    var support = ($('html')).hasClass('backgroundsize');
    resize.render = support ? resize.renderRealBrowser : resize.renderIe;
    $(window).resize(function() {
      resize.render();
      utils.getSectionsPositions();
    });
    resize.render();
    utils.getSectionsPositions();
  },
  renderIe: function() {
    var crop, height, pageHeight, pageWidth, width;
    pageWidth = width = $(window).width();
    pageHeight = $(window).height();
    height = width * 0.40;
    if (height >= (pageHeight)) {
      crop = (height - (pageHeight)) / -2;
      $('.full-screen').css({
        height: height,
        width: width,
        marginBottom: crop * 2
      });
    } else {
      width = pageHeight * 2.5;
      crop = (width - pageWidth) / -2;
      $('.full-screen').css({
        height: pageHeight,
        width: width,
        marginRight: crop,
        marginLeft: crop
      });
    }
  },
  renderRealBrowser: function() {
    var height;
    height = $(window).height();
    $('.full-screen').css({height: height});
  }
};