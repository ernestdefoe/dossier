import app from 'flarum/admin/app';

export const t = (key, params) => app.translator.trans(`ernestdefoe-dossier.admin.${key}`, params);

export const api = (path) => `${app.forum.attribute('apiUrl')}${path}`;
