/*
Copyright 2016 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var React = require('react');

/*
 * A stripped-down room header used for things like the user settings
 * and room directory.
 */
module.exports = React.createClass({
    displayName: 'SimpleRoomHeader',

    propTypes: {
        title: React.PropTypes.string,
        onCancelClick: React.PropTypes.func,
    },

    render: function() {
        var cancelButton;
        if (this.props.onCancelClick) {
            cancelButton = <div className="mx_RoomHeader_cancelButton" onClick={this.props.onCancelClick}><img src="img/cancel.svg" width="18" height="18" alt="Cancel"/> </div>
        }

        return (
            <div className="mx_RoomHeader" >
                <div className="mx_RoomHeader_wrapper">
                    <div className="mx_RoomHeader_simpleHeader">
                        { this.props.title }
                        { cancelButton }
                    </div>
                </div>
            </div>
        );
    },
});

