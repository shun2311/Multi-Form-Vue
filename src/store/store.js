import { defineStore } from 'pinia'


export const useisYearly = defineStore('isYearlyStore', {
  state: () => ({
    isYearly: false 
  }),
  actions: {
    handleYearlySelection(isYearly) {
      this.isYearly = isYearly;
    },
  }
})

export const usePlanStore = defineStore('planStore', {
  state: () => ({
    plans: [
      { id: 'arcade', title: 'Arcade', amount: 9, yearlyAmt: 90, img: '/src/assets/images/icon-arcade.svg', selected: true },
      { id: 'advanced', title: 'Advanced', amount: 12, yearlyAmt: 120, img: '/src/assets/images/icon-advanced.svg', selected: false },
      { id: 'pro', title: 'Pro', amount: 15, yearlyAmt: 150, img: '/src/assets/images/icon-pro.svg', selected: false }
    ],
  }),
  actions: {
    handlePlanSelection(planId) {
      this.plans.forEach(plan => {
        plan.selected = (plan.id === planId);
      });
    }
  }
})

export const useAddonStore = defineStore('addonStore', {
  state: () => ({
    addons: [
        {
            id: 'online',
            title: "Online service",
            subtitle: "Access to multiplayer games",
            selected: false,
            amount: 1,
            yearlyAmt: 10
        },
        {
            id: 'storage',
            title: "Larger storage",
            subtitle: "Extra 1TB of cloud save",
            selected: false,
            amount: 2,
            yearlyAmt: 20
        },
        {
            id: 'profile',
            title: "Customizable profile",
            subtitle: "Custom theme on your profile",
            selected: false,
            amount: 2,
            yearlyAmt: 20
        }
    ],
  }),
  actions: {
   handleAddonSelection(addonId) {
        this.addons.forEach(addon => {
            if(addonId === addon.id) {
                addon.selected = !addon.selected;
            }
        });
    },
  }
})