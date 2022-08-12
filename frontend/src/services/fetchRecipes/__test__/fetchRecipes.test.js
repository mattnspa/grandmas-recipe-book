import axios from 'axios';

import { FetchRecipe } from '../fetchRecipes'

jest.mock("axios");

describe('FetchRecipe', () => {
  describe('when API call is successful', () => {
    it('should return a list of recipes', async () => {
      // given
      const mockController = new AbortController();
      const BASE_URL = process.env.REACT_APP_BASE_URL;
      const slug = `/id/1`
      const recipe = {
        id: 1,
        title: "title",
        subtitle: "subtitle",
        ingredients: [
          {
            name: "name",
            size: 1,
            unit: "unit"
          }
        ],
        steps: [
          "step1"
        ],
        image: "www.test.com"
      };
      const response = {data: [recipe]}
      axios.mockResolvedValueOnce(response);

      // when
      const result = await FetchRecipe(slug,mockController);

      // then
      expect(axios).toHaveBeenCalledWith(`${BASE_URL}/api/recipes${slug}`, {'signal': mockController.signal});
      expect(result).toEqual([recipe]);
    });
  });

  describe("when API call fails", () => {
    it("should not return anything", async () => {
      // given
      const message = "Network Error";
      const mockController = new AbortController();
      const BASE_URL = process.env.REACT_APP_BASE_URL;
      const slug = `/id/1`
      axios.mockRejectedValueOnce(new Error(message));

      // when
      const result = await FetchRecipe(slug,mockController);

      // then
      expect(axios).toHaveBeenCalledWith(`${BASE_URL}/api/recipes${slug}`, {'signal': mockController.signal});
      expect(result).toEqual();
    });
  });
});
