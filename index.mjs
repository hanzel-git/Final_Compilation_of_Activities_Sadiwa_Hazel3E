import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

//Activity 1: The E-Commerce Inventory Processor
const Original_Price = [35000, 12500, 3500, 1800];
const discountRate = 0.12;
const shippingFee = 350;

function calculateFinalItemPrices(Original_Price, discountRate, shippingFee) {
  const finalPrices = [];

  for (const price of Original_Price) {
    const discountedPrice = price * (1 - discountRate);
    const finalPrice = discountedPrice + shippingFee;
    finalPrices.push(parseFloat(finalPrice.toFixed(2)));
  }

  return finalPrices;
}

const updatedPrices = calculateFinalItemPrices(
  Original_Price,
  discountRate,
  shippingFee
);
console.log(`updatedPrices`);
console.log(
  `Final prices of all items after discount and shipping fee: ${updatedPrices}`
);

//Activity 2: The HR Performance Auditor

function getBonusEligibleEmployees(employeeRecords) {
  const eligibleEmployees = [];

  for (let employee of employeeRecords) {
    if (
      employee.score >= 85 &&
      employee.department === "Sales" &&
      employee.hired < 2024
    ) {
      eligibleEmployees.push({
        id: employee.id,
        score: employee.score,
      });
    }
  }

  return eligibleEmployees;
}

const employees = [
  { id: "E101", score: 92, department: "Sales", hired: 2023 },
  { id: "E102", score: 75, department: "Sales", hired: 2024 },
  { id: "E103", score: 88, department: "Marketing", hired: 2022 },
  { id: "E104", score: 95, department: "Finance", hired: 2024 },
  { id: "E105", score: 67, department: "Marketing", hired: 2023 },
  { id: "E106", score: 85, department: "HR", hired: 2022 },
  { id: "E107", score: 78, department: "Finance", hired: 2023 },
  { id: "E108", score: 90, department: "Sales", hired: 2024 },
  { id: "E109", score: 82, department: "HR", hired: 2022 },
  { id: "E110", score: 88, department: "Marketing", hired: 2023 },
];

console.log(getBonusEligibleEmployees(employees));
console.log("Array of Objects:", employees);

//Activity 3: The Project Manager's Timeline

function calculateProjectTotals(projectTasks) {
  let totalDuration = 0;
  let totalCost = 0;

  for (let task of projectTasks) {
    totalDuration += task.durationDays;
    totalCost += task.cost;
  }

  return {
    ThetotaldurationDays: totalDuration,
    ThetotalCost: totalCost,
  };
}

const projectTasks = [
  { name: "Design", durationDays: 10, cost: 50000 },
  { name: "Development", durationDays: 35, cost: 180000 },
  { name: "Testing", durationDays: 15, cost: 75000 },
  { name: "Deployment", durationDays: 5, cost: 20000 },
  { name: "Maintenance", durationDays: 20, cost: 60000 },
  { name: "Research", durationDays: 8, cost: 30000 },
  { name: "Planning", durationDays: 12, cost: 40000 },
  { name: "Implementation", durationDays: 30, cost: 150000 },
  { name: "Review", durationDays: 7, cost: 25000 },
  { name: "Documentation", durationDays: 6, cost: 15000 },
];

console.log(calculateProjectTotals(projectTasks));

//Activity 4: The CRM Lead Scorer
const leadRecords = [
  { leadId: "L001", engagementPoints: 45 },
  { leadId: "L002", engagementPoints: 120 },
  { leadId: "L003", engagementPoints: 15 },
  { leadId: "L004", engagementPoints: 78 },
  { leadId: "L005", engagementPoints: 200 },
  { leadId: "L006", engagementPoints: 34 },
  { leadId: "L007", engagementPoints: 89 },
  { leadId: "L008", engagementPoints: 56 },
  { leadId: "L009", engagementPoints: 143 },
  { leadId: "L010", engagementPoints: 67 },
];

function assignLeadStatus(leadRecords) {
  const scoreLeads = [];

  for (let i = 0; i < leadRecords.length; i++) {
    const lead = leadRecords[i];
    let status = "";

    if (lead.engagementPoints >= 100) {
      status = "Hot";
    } else if (lead.engagementPoints >= 50) {
      status = "Warm";
    } else {
      status = "Cold";
    }

    const updatedLead = {
      ...lead,
      status: status,
    };

    scoreLeads.push(updatedLead);
  }

  return scoreLeads;
}

const output = assignLeadStatus(leadRecords);
console.log("Array of Objects:", output);

//Activity 5: The Configuration Manager

const BASE_CONFIG = {
  theme: "dark",
  notifications: true,
  logging: false,
};

const updatePatches = [
  { notifications: false, logging: true },
  { theme: "light" },
  { notifications: true },
];

function applyConfigPatches(baseConfig, updatePatches) {
  let currentConfig = { ...baseConfig };

  for (const patch of updatePatches) {
    currentConfig = { ...currentConfig, ...patch };
  }

  return currentConfig;
}

const finalConfig = applyConfigPatches(BASE_CONFIG, updatePatches);
console.log("The final, merged configuration:", finalConfig);

//Activity 6: The Database Aggregator
function calculateMonthlyTotals(monthlyExpenseReports) {
  let monthlyTotals = [];

  for (let month of monthlyExpenseReports) {
    let monthSum = 0;

    let expenses = Object.values(month);
    for (let amount of expenses) {
      monthSum += amount;
    }

    monthlyTotals.push(monthSum);
  }

  return monthlyTotals;
}
const monthlyExpenseReports = [
  { Rent: 1500, Utilities: 250, Food: 800 },
  { Rent: 1500, Utilities: 300, Food: 750, Travel: 200 },
  { Rent: 1500, Food: 900, Entertainment: 150 },
  { Rent: 1500, Utilities: 275, Food: 850, Travel: 300 },
  { Rent: 1500, Utilities: 260, Food: 800, Entertainment: 200 },
  { Rent: 1500, Utilities: 290, Food: 950, Travel: 250 },
  { Rent: 1500, Utilities: 280, Food: 870, Entertainment: 180 },
  { Rent: 1500, Utilities: 310, Food: 920, Travel: 220 },
  { Rent: 1500, Utilities: 265, Food: 830, Entertainment: 160 },
  { Rent: 1500, Utilities: 295, Food: 890, Travel: 270 },
  { Rent: 1500, Utilities: 285, Food: 860, Entertainment: 190 },
  { Rent: 1500, Utilities: 300, Food: 940, Travel: 300 },
];

const totals = calculateMonthlyTotals(monthlyExpenseReports);
console.log("Monthly Totals:", totals);
