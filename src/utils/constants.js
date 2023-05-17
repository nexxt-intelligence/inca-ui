export const PAGE_SIZE_OPTIONS = [12, 24, 36, 50, 100];

export const QUICKTAG_SORT_OPTIONS = {
  LAST_UPDATE_DESC: "lastUpdateDesc",
  LAST_UPDATE_ASC: "lastUpdateAsc",
};

export const QUICKTAG_DROPDOWN_OPTIONS = [
  {
    value: QUICKTAG_SORT_OPTIONS.LAST_UPDATE_DESC,
    label: "Last Update Desc",
  },
  {
    value: QUICKTAG_SORT_OPTIONS.LAST_UPDATE_ASC,
    label: "Last Update Asc",
  },
];

export const PROJECT_STATUS = {
  ARCHIVED: "ARCHIVED",
  DRAFT: "DRAFT",
  LIVE: "LIVE",
  PAUSED: "PAUSED",
  COMPLETE: "COMPLETE",
  REVIEW: "REVIEW",
};

export const HELPER_TOOLTIP_MAPPING = {
  // portal
  "project directory": "Directory of projects by every user in your account.",
  "project overview": "General settings for your project",
  "target audience":
    "Audience settings for your project. This is also where you can set custom quotas and screener questions for your study",
  "question builder": "Add, remove, and edit questions for your study",
  "project preview":
    "Preview your study from start to finish. You can also set custom themes and adjust your bot settings.",
  // dashboard
  "management stats":
    "Latest project status updates on completes, quota, and termination.",
  reports: "Dashboard visualizations for all your completed respondent data",
  crosstab: "Create custom crosstabs based off completed respondent data",
  "data export": "Export your data in CSV and SPSS format",
  // common status
  live: "Study currently in field and collecting respondent data.",
  paused: "Study paused and is not collecting respondent data.",
  complete: "Study no longer accessible by participants.",
  completes: "Breakdown of completes based on time",
  attempts: "Total number of attempts in a study",
};
