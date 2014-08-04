(function() {
    tinymce.PluginManager.add('terminal_button', function( editor, url ) {
        editor.addButton( 'terminal_button', {
            title: 'Terminal',
            text: 'Generate terminal',
            icon: false,
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Insert command line',
                    body: [{
                        type: 'textbox',
                        name: 'command',
                        label: 'Command'
                    }],
                    onsubmit: function( e ) {
                        editor.insertContent(
'<div class="terminalWindow">\n'                                +
'    <div class="terminalToolbar">\n'                           +
'        <div class="terminalTop">\n'                           +
'            <div class="terminalLights">\n'                    +
'                <div class="terminalLight terminalRed">\n'     +
'                    <div class="terminalGlyph">×</div>\n'      +
'                    <div class="terminalShine"></div>\n'       +
'                    <div class="terminalGlow"></div>\n'        +
'                </div>\n'                                      +
'                <div class="terminalLight terminalYellow">\n'  +
'                    <div class="terminalGlyph">-</div>\n'      +
'                    <div class="terminalShine"></div>\n'       +
'                    <div class="terminalGlow"></div>\n'        +
'                </div>\n'                                      +
'                <div class="terminalLight terminalGreen">\n'   +
'                    <div class="terminalGlyph">+</div>\n'      +
'                    <div class="terminalShine"></div>\n'       +
'                    <div class="terminalGlow"></div>\n'        +
'                </div>\n'                                      +
'            </div>\n'                                          +
'            <div class="terminalTitle">\n'                     +
'                <div class="terminalFolder">\n'                +
'                    <div class="terminalFolderTab"></div>\n'   +
'                    <div class="terminalFolderBody"></div>\n'  +
'                </div>\n'                                      +
'                Terminal\n'                                    +
'            </div>\n'                                          +
'            <div class="terminalBubble"></div>\n'              +
'        </div>\n'                                              +
'    </div>\n'                                                  +
'    <div class="terminalText">\n'                              +
'        <p>\n'                                                 +
'        <div>$ ' + e.data.command + '</div>\n'             +
'        <div class="terminalCursor">$ </div>\n'            +
'        </p>\n'                                                +
'    </div>\n'                                                  +
'</div><br>');
                    }
                });
            }
        });
    });
})();
