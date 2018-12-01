var el = wp.element.createElement,
  registerBlockType = wp.blocks.registerBlockType,
  blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

registerBlockType('myplugin/block1', {
  title: 'Block1',
  icon: 'universal-access-alt',
  category: 'layout',
  edit: function () {
    return el('p', { style: blockStyle }, 'Hello editor.');
  },
  save: function () {
    return el('p', { style: blockStyle }, 'Hello saved content.');
  },
});

dbg("we!");
function dbg(obj){
  console.log(obj);
}