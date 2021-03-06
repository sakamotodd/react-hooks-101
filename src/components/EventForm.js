import React, { useState, useContext } from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENT,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOG,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    //preventDefaultボタンなどをクリックした時に、画面遷移させたくない時使用
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'メモを作成しました。',
      operateAt: timeCurrentIso8601(),
    });
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのメモを本当に削除しても良いですか？'
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENT });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのメモを削除しました。',
        operateAt: timeCurrentIso8601()
      });
    }
  };

  const unCreatable = title === '' || body === '';
  const deleteAllOperationLogs = (e) => {
    e.preventDefault();
    const result = window.confirm(
      '全ての操作ログを本当に削除しても良いですか？'
    );
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOG,
      });
    }
  };

  return (
    <React.Fragment>
      <h4>メモ作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>
      <form>
        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          メモを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのメモを削除する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </React.Fragment>
  );
};
export default EventForm;
