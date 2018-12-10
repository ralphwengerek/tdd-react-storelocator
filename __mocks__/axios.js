var axiosMock = jest.genMockFromModule("axios");

let mockResponse = {
  data: {
    shops: [
      {
        location: "Covent Garden",
        address: "123 Covent Garden Street",
        image: "/images/coventgarden.png"
      },
      {
        location: "Holborn",
        address: "456 Holborn street",
        image: "/images/holborn.png"
      },
      {
        location: "",
        address: "",
        image: ""
      }
    ]
  }
};

const req = () => {
  return new Promise(
    resolve => {
      axiosMock.delayTimer = setTimeout(() => resolve(mockResponse), 1000);
    },
    reject => {
      reject("Error");
    }
  );
};

axiosMock.get.mockImplementation(req);

export default axiosMock;
