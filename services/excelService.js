const XLSX = require("xlsx");
const path = require("path");

const generateExcel = async (data, fileName) => {
  try {
    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    const filePath = path.join(__dirname, `../${fileName}.xlsx`);

    XLSX.writeFile(workbook, filePath);

    return filePath;
  } catch (error) {
    console.log("Excel Error:", error.message);

    throw error;
  }
};

module.exports = generateExcel;

