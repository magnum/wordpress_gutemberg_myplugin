// var el = wp.element.createElement,
//   registerBlockType = wp.blocks.registerBlockType,
//   blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

var el = wp.element.createElement,
  registerBlockType = wp.blocks.registerBlockType,
  RichText = wp.editor.RichText;

registerBlockType('myplugin/block1', {
  title: 'block1',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    }
  },
  edit: function (props) {
    var content = props.attributes.content;

    function onChangeContent(newContent) {
      props.setAttributes({ content: newContent });
    }

    return el(
      RichText,
      {
        tagName: 'p',
        className: props.className,
        onChange: onChangeContent,
        value: content,
      }
    );
  },

  save: function (props) {
    var content = props.attributes.content;
    return el(RichText.Content, {
      tagName: 'p',
      className: props.className,
      value: content
    });
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