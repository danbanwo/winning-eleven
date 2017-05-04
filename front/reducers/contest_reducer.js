const _defaultState = {
  all_contests: [],
  epl_contests: [],
  search_query: '',
  filtered_contests: [],
  filter_time: [],
  league_filter_search: []
};

export default (state = _defaultState, action) => {
  switch (action.type) {
    case 'ALL_CONTESTS':
    return
    break;

    default: return state;
  }
}
