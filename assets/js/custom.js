$(window).on('load', () => {
  $('h4').each((_index, ele) => {
    var node = $(ele);

    console.log(node);
    console.log(node.contents());

    var text = node.text().trim();
    var anchor = `<a href="https://www.esv.org/${text}" target="_blank"></a>`;
    node
      .contents()
      .filter((_index, item) => item.nodeType === 3
        && !(!item.data || !item.data.trim()))
      .wrap(anchor);
  });
});