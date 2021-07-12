import { useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import { removeOneNotepadItem } from "../../store/notepads/notepad-item-actions";
import classes from "../../styles/NotepadDetail/TaskCard.module.css";

const TaskLayout = props => {
	const [taskCompleted, setTaskCompleted] = useState(false);
	const dispatch = useDispatch();

	const onChangeHandler = () => setTaskCompleted(prevState => !prevState);

	const removeHandler = () => {
		dispatch(removeOneNotepadItem(props.notepadId, props.itemId));
	};

	return (
		<Fragment>
			<div className={classes["item-container"]}>
				<input
					className={classes["complete-checkbox"]}
					onChange={onChangeHandler}
					type="checkbox"
					id={props.item}
					name={props.item}
					checked={taskCompleted}
				/>
				<label htmlFor={props.item}>
					<span className={classes.todo}>{props.item}</span>
				</label>
			</div>
			<div className={classes.buttons}>
				<button
					className={`${classes.edit} ${classes.button}`}
					onClick={props.editStatusHandler}
				>
					<i className="fas fa-edit"></i>
				</button>
				<button
					className={`${classes.trash} ${classes.button}`}
					onClick={removeHandler}
				>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default TaskLayout;
