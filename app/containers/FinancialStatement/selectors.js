import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the financialStatement state domain
 */

const selectFinancialStatementDomain = state =>
  state.financialStatement || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FinancialStatement
 */

const makeSelectFinancialStatement = () =>
  createSelector(
    selectFinancialStatementDomain,
    substate => substate,
  );

export default makeSelectFinancialStatement;
export { selectFinancialStatementDomain };
