import app from 'flarum/forum/app';

/** A forum string of Dossier's. */
export const t = (key, params) => app.translator.trans(`ernestdefoe-dossier.forum.${key}`, params);

export const apiUrl = (path) => `${app.forum.attribute('apiUrl')}${path}`;

/** Whether the viewer sees the Dossier tab on this profile. Someone else's empty dossier has none. */
export function showsTab(user) {
  if (!user) return false;
  if (app.session.user === user && app.forum.attribute('canHaveDossier')) return true;

  return !!user.attribute('hasDossier');
}
