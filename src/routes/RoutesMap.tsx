import { ApplicationState } from 'store';
import { ActionType } from 'store/context';

// const fakeDelay = (ms: number) => new Promise(res => setTimeout(res, ms))
const RoutesMap: any = {
  'Callback': {
    path: '/callback'
  },
  'Home': {
    path: '/',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Home/DocQReceive': {
    path: '/home/DocQReceive',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Home/DocQAccept': {
    path: '/Home/DocQAccept',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Home/Cadastral': {
    path: '/home/Cadastral',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'thongtindiachinh/quanlyhsdiachinh': {
    path: '/thongtindiachinh/quanlyhsdiachinh',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'thongtindiachinh/quanlyhsdiachinh/nhaphs': {
    path: '/thongtindiachinh/quanlyhsdiachinh/nhaphs/:type?/:id?',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'thongtindiachinh/chusohuu': {
    path: '/thongtindiachinh/chusohuu',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'thongtindiachinh/chusohuu/nhapchusohuu': {
    path: '/thongtindiachinh/chusohuu/nhapchusohuu/:type?/:id?',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Home/Cadastral/Detail': {
    path: '/Home/Cadastral/Detail',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Home/Detail': {
    path: '/home/detail/:id',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Home/RegisterCase': {
    path: '/home/registercase',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Home/NhapDuLieuDiaChinh': {
    path: '/home/detail/:id',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Home'
      });
    }
  },
  'Transaction': {
    path: '/khaithac',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Transaction'
      });
    }
  },
  'MapInfo': {
    path: '/tichhop',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'MapInfo'
      });
    }
  },
  'Dic': {
    path: '/Dic',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Dic'
      });
    }
  },
  'dic/organ': {
    path: '/dic/organ',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Dic'
      });
    }
  },
  'dic/case': {
    path: '/dic/case',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'Dic'
      });
    }
  },
  'qldanhmuc': {
    path: '/',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'qldanhmuc'
      });
    }
  },
  'qldanhmuc/qldanhsach': {
    path: '/qldanhmuc/qldanhsach',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'qldanhmuc'
      });
    }
  },
  'giaodich': {
    path: '/',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'giaodich'
      });
    }
  },
  'giaodich/tiepnhan': {
    path: '/giaodich/tiepnhan',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'giaodich'
      });
    }
  },
  'giaodich/tiepnhan/chitiet': {
    path: '/giaodich/tiepnhan/hosochitiet/:id',
    thunk: (dispatch: (action: any) => void, getState: () => ApplicationState) => {
      dispatch({
        type: ActionType.SWITCH_APP,
        app: 'giaodich'
      });
    }
  },
  '401': {
    path: '/401'
  },
}
//#endregion
export default RoutesMap

// map ACTion tương ứng với 1 Path