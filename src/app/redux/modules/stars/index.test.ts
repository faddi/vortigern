import { expect } from 'chai';
import { fetchMock, mockStore } from '../../../helpers/TestHelper';
import { IStarsAction, GET_REQUEST, GET_SUCCESS, GET_FAILURE, getStars } from './';

/** Mock Data */
const githubResponse = {
  stargazers_count: 999,
};

const errResponse = {
  message: 'ERROR :-O',
};

/** Stargazers Module */
describe('Stars Module', () => {
  /** Action Creators */
  describe('Action Creators', () => {
    describe('Get Stars (Async)', () => {
      afterEach(() => {
        fetchMock.restore();
      });

      /** 200 */
      it('dispatches Request and Success Actions on OK requests', done => {
        fetchMock.mock('https://api.github.com/repos/barbar/vortigern', {
          status: 200,
          body: githubResponse,
        });

        const expectedActions: IStarsAction[] = [
          { type: GET_REQUEST },
          { type: GET_SUCCESS, count: githubResponse.stargazers_count },
        ];

        const store = mockStore({});

        getStars()(store.dispatch)
          .then(() => expect(store.getActions()).to.eql(expectedActions))
          .then(() => done())
          .catch(err => done(err));
      });

      /** 400 */
      it('dispatches Failure on failed requests', done => {
        fetchMock.mock('https://api.github.com/repos/barbar/vortigern', {
          status: 400,
          body: errResponse,
        });

        const expectedActions: IStarsAction[] = [
          { type: GET_REQUEST },
          { type: GET_FAILURE, message: errResponse.message },
        ];

        const store = mockStore({});

        getStars()(store.dispatch)
          .then(() => expect(store.getActions()).to.eql(expectedActions))
          .then(() => done())
          .catch(err => done(err));
      });
    });
  });
});
