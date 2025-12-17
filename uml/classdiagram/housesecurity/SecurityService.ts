import { Securable } from "./Securable.ts";

export class SecurityService {
  private securableObjects: Securable[] = [];

  constructor() {}

  addObject(object: Securable): void {
    this.securableObjects.push(object);
    console.log("Object added to security service");
  }

  removeObject(object: Securable): void {
    const index = this.securableObjects.indexOf(object);
    if (index > -1) {
      this.securableObjects.splice(index, 1);
      console.log("Object removed from security service");
    }
  }

  checkAllSecurity(): void {
    console.log("\n=== Security Check ===");
    this.securableObjects.forEach((object) => {
      console.log(object.getSecurityStatus());
    });
    console.log("====================\n");
  }

  getSecurityReport(): string {
    let report = "SECURITY REPORT\n";
    report += "================\n";

    let allSecured = true;
    for (const object of this.securableObjects) {
      const isSecured = object.isSecured();
      report += object.getSecurityStatus() + "\n";
      if (!isSecured) {
        allSecured = false;
      }
    }

    report += "================\n";
    report += `Overall Status: ${
      allSecured ? "ALL SECURED" : "SECURITY BREACH"
    }`;

    return report;
  }
}
