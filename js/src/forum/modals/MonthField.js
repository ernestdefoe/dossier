import Component from 'flarum/common/Component';
import { t } from '../util';

/**
 * A month and a year ("2022-05"): a month list and a year box. Works the same
 * in every browser, where <input type="month"> is a text box in Safari and
 * Firefox on the desktop.
 */
export default class MonthField extends Component {
  view() {
    const [year, month] = (this.attrs.value || '').split('-');
    const set = (y, mo) => this.attrs.onchange(y && mo ? `${y}-${mo}` : y || mo ? `${y || ''}-${mo || ''}` : '');

    return (
      <div className="DossierMonth">
        <select
          className="FormControl DossierMonth-month"
          id={this.attrs.id}
          name={this.attrs.name}
          aria-label={t('modals.month')}
          value={month || ''}
          onchange={(e) => set(year, e.target.value)}
          disabled={this.attrs.disabled}
        >
          <option value="">{t('modals.month')}</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option value={String(i + 1).padStart(2, '0')}>{dayjs().month(i).format('MMMM')}</option>
          ))}
        </select>
        <input
          className="FormControl DossierMonth-year"
          type="number"
          inputmode="numeric"
          min="1900"
          max={new Date().getFullYear() + 10}
          placeholder={t('modals.year')}
          aria-label={t('modals.year')}
          value={year || ''}
          oninput={(e) => set(e.target.value, month)}
          disabled={this.attrs.disabled}
        />
      </div>
    );
  }
}
