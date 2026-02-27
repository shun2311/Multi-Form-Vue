import { defineStore } from "pinia";

export const useStepStore = defineStore("stepStore", {
  state: () => ({
    step: 1,
  }),
  actions: {
    nextStep() {
      this.step++;
    },
    prevStep() {
      this.step--;
    },
    backToPlanSelection() {
      this.step = 2;
    }
  },
});

export const usePersonalInfoStore = defineStore("personalInfoStore", {
  state: () => ({
    info: [
      {
        id: "name",
        title: "Name",
        text: "",
        label: "e.g. Stephen King",
        counter: 50,
        rules: [
          (value) => {
            if (value) return true;

            return "Name is required.";
          },
          (value) => {
            if (value?.length <= 50) return true;

            return "Name must be less than 50 characters.";
          },
        ],
      },
      {
        id: "email",
        title: "Email",
        text: "",
        label: "e.g. stephenking@lorem.com",
        counter: 50,
        rules: [
          (value) => {
            if (value) return true;

            return "E-mail is required.";
          },
          (value) => {
            if (/.+@.+\..+/.test(value)) return true;

            return "E-mail must be valid.";
          },
        ],
      },
      {
        id: "number",
        title: "Phone Number",
        text: "",
        label: "e.g. 123-456-7890",
        counter: 15,
        rules: [
          (v) => !!v || "Phone number is required",
          (v) => /^[0-9\-+()\s]{7,15}$/.test(v) || "Phone number must be valid",
        ],
      },
    ],
  }),
  actions: {
    updatePersonalInfo(text, fieldId) {
      this.info.forEach((field) => {
        if (field.id === fieldId) {
          field.text = text;
        }
      });
    },
  },
});

export const useisYearly = defineStore("isYearlyStore", {
  state: () => ({
    isYearly: false,
  }),
  actions: {
    handleYearlySelection(isYearly) {
      this.isYearly = isYearly;
    },
  },
});

export const usePlanStore = defineStore("planStore", {
  state: () => ({
    plans: [
      {
        id: "arcade",
        title: "Arcade",
        amount: 9,
        yearlyAmt: 90,
        img: "/src/assets/images/icon-arcade.svg",
        selected: true,
      },
      {
        id: "advanced",
        title: "Advanced",
        amount: 12,
        yearlyAmt: 120,
        img: "/src/assets/images/icon-advanced.svg",
        selected: false,
      },
      {
        id: "pro",
        title: "Pro",
        amount: 15,
        yearlyAmt: 150,
        img: "/src/assets/images/icon-pro.svg",
        selected: false,
      },
    ],
  }),
  actions: {
    handlePlanSelection(planId) {
      this.plans.forEach((plan) => {
        plan.selected = plan.id === planId;
      });
    },
    selectedPlan() {
      return this.plans.find((plan) => plan.selected);
    },
  },
});

export const useAddonStore = defineStore("addonStore", {
  state: () => ({
    addons: [
      {
        id: "online",
        title: "Online service",
        subtitle: "Access to multiplayer games",
        selected: false,
        amount: 1,
        yearlyAmt: 10,
      },
      {
        id: "storage",
        title: "Larger storage",
        subtitle: "Extra 1TB of cloud save",
        selected: false,
        amount: 2,
        yearlyAmt: 20,
      },
      {
        id: "profile",
        title: "Customizable profile",
        subtitle: "Custom theme on your profile",
        selected: false,
        amount: 2,
        yearlyAmt: 20,
      },
    ],
  }),
  actions: {
    handleAddonSelection(addonId) {
      this.addons.forEach((addon) => {
        if (addonId === addon.id) {
          addon.selected = !addon.selected;
        }
      });
    },
    selectedAddons() {
      return this.addons.filter((addon) => addon.selected);
    },
  },
});
