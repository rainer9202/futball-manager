import { reactive } from "vue";

const options: MenuLinkType[] = [
  { label: "Home", icon: "mdi-home", routeTo: "HomePage", separator: true },
  { label: "Inbox", icon: "mdi-inbox", routeTo: "TestPage", separator: true, badge: 12, disabled: true },
  { label: "Squad", icon: "mdi-tshirt-crew", routeTo: "TestPage", disabled: true },
  { label: "Dynamics", icon: "mdi-source-branch", routeTo: "TestPage", disabled: true },
  { label: "Tactics", icon: "mdi-alert-box", routeTo: "TacticsOverviewPage" },
  { label: "Team Report", icon: "mdi-file-document", routeTo: "TestPage", disabled: true },
  { label: "Staff", icon: "mdi-account-group", routeTo: "TestPage", disabled: true },
  { label: "Training", icon: "mdi-account-reactivate", routeTo: "TestPage", disabled: true },
  { label: "Medical Care", icon: "mdi-medical-bag", routeTo: "TestPage", separator: true, disabled: true },
  { label: "Schedule", icon: "mdi-calendar-check", routeTo: "TestPage", disabled: true },
  { label: "Competitions", icon: "mdi-police-badge", routeTo: "TestPage", separator: true, disabled: true },
  { label: "Scouting", icon: "mdi-magnify-plus", routeTo: "TestPage", disabled: true },
  { label: "Transfers", icon: "mdi-account-convert", routeTo: "TestPage", separator: true, disabled: true },
  { label: "Club Info", icon: "mdi-shield-home", routeTo: "TestPage", disabled: true },
  { label: "Club Vision", icon: "mdi-shield-key", routeTo: "TestPage", disabled: true },
  { label: "Finance", icon: "mdi-finance", routeTo: "TestPage", disabled: true }
];

export default function UseLeftMenuComposable() {

  /************  Variables   ************/
  const menuLinks = reactive( options );

  return {
    menuLinks
  };
}
