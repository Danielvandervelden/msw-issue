import "@testing-library/jest-dom";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("example failure", () => {
    it("should pass, but doesn't", () => {
        server.use(
            http.get("/test", () => {
                return new HttpResponse(null, {
                    status: 500,
                });
            })
        );
    });
});
