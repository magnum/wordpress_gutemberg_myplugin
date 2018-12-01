var el = wp.element.createElement,
  registerBlockType = wp.blocks.registerBlockType,
  blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

registerBlockType('myplugin/block1', {
  title: 'Block1',
  icon: 'universal-access-alt',
  category: 'layout',
  edit: function (params) {
    console.table(params);
    //return el('p', { style: blockStyle }, `Hi, i'm the editor content`);
    return el('p', { style: blockStyle }, params.attributes.content);
  },
  save: function (params) {
    return el('p', { style: blockStyle }, params.attributes.content);
  },
});


function myplugin_dbg(obj){
  console.log(obj);
}

function myplugin_dumpscope(){
  var n, arg, name;
  console.log("typeof this = " + typeof this);
  for (name in this) {
    console.log("this[" + name + "]=" + this[name]);
  }
  for (n = 0; n < arguments.length; ++n) {
    arg = arguments[n];
    console.log("typeof arguments[" + n + "] = " + typeof arg);
    for (name in arg) {
      console.log("arguments[" + n + "][" + name + "]=" + arg[name]);
    }
  }
}