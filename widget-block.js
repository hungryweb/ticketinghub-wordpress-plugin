(function() {
    wp.blocks.registerBlockType('ticketinghub/widget-block', {
        title: 'TicketingHub Widget',
        icon: 'admin-plugins',
        category: 'common',
        attributes: {
            scriptCode: {
                type: 'string',
                default: ''
            }
        },
        edit: function(props) {
            var scriptCode = props.attributes.scriptCode;

            function updateScriptCode(event) {
                props.setAttributes({
                    scriptCode: event.target.value
                });
            }

            return wp.element.createElement(
                'div',
                { 
                    className: "ticketinghub-widget-block",
                    style: {
                        backgroundColor: '#01BAF0',
                        padding: '10px 10px 5px',
                        borderRadius: '10px',
                        borderColor: '#0095C0',
                        borderWidth: '3px',
                        borderStyle: 'solid'
                    }
                },
                wp.element.createElement(
                    'h5',
                    {
                        style: {
                            color: '#ffffff',
                            margin: '0 0 10px',
                            padding: '0px',
                            borderRadius: '10px',
                            textTransform: 'none',
                            fontSize: '16px',
                        }
                    },
                    'Add your TicketingHub widget code:'
                ),
                wp.element.createElement(
                    'textarea',
                    {
                        value: scriptCode,
                        onChange: updateScriptCode,
                        style: {
                            width: '100%',
                            height: '50px',
                            borderRadius: '10px',
                            backgroundColor: '#A7EBFF',
                            borderColor: '#ffffff',
                            borderWidth: '2px',
                            borderStyle: 'solid'
                        }
                    }
                )
            );
        },
        save: function(props) {
            var scriptCode = props.attributes.scriptCode;
            return wp.element.createElement(
                'div',
                null,
                wp.element.createElement(
                    'div', 
                    { dangerouslySetInnerHTML: { __html: scriptCode } }
                )
            );
        }
    });
})();
