import React, { Component } from "react";

// interface GridHocProps {
//   url: string;
//   dataProperties: string[];
// }

interface GridHocState {
  data: any[];
}


// -> component () -> [] -> [0] -> [name, email]
const withGridData = (url: string, dataProperties: string[]) => {
  return (WrappedComponent: React.ComponentType<{ data: any[]; properties: string[] }>) => {
    return class GridHoc extends Component<{}, GridHocState> {
      state: GridHocState = {
        data: [],
      };

      componentDidMount() {
        this.fetchData();
      }

      fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          this.setState({ data });
          console.log(this.state.data);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };

      render() {
        const { data } = this.state;
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  {dataProperties.map((property, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-300"
                    >
                      {property}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`hover:bg-gray-50 ${
                      rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {dataProperties.map((property, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-4 py-2 text-sm text-gray-600 border border-gray-300"
                      >
                        {item[property]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    };
  };
};

export default withGridData;
