/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/classnames/classnames.d.ts" />
/// <reference path="./interfaces.d.ts"/>

// import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from "./constants";
// import { Utils } from "./utils";

namespace app.components {
    export class TodoFooter extends React.Component<ITodoFooterProps, {}> {
        public render() {
            var activeTodoWord = app.miscelanious.Utils.pluralize(this.props.count, 'item');
            var clearButton = null;
            if (this.props.completedCount > 0) {
                clearButton = (
                    <button className="clear-completed" onClick={this.props.onClearCompleted}>
                        Clear completed
                    </button>
                );
            }
            // React idiom for shortcutting to `classSet` since it'll be used often
            var nowShowing = this.props.nowShowing;
            return (
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{this.props.count}</strong> {activeTodoWord} left
                    </span>
                    <ul className="filters">
                        <li>
                            <a href="#/" className={classNames({selected: nowShowing === app.constants.ALL_TODOS})}>
                                All
                            </a>
                        </li>
                        {' '}
                        <li>
                            <a href="#/active" className={classNames({selected: nowShowing === app.constants.ACTIVE_TODOS})}>
                                Active
                            </a>
                        </li>
                        {' '}
                        <li>
                            <a href="#/completed" className={classNames({selected: nowShowing === app.constants.COMPLETED_TODOS})}>
                                Completed
                            </a>
                        </li>
                    </ul>
                    {clearButton}
                </footer>
            );
        }
    }
}
