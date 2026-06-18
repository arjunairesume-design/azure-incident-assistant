export const INCIDENT_KNOWLEDGE = `

REAL AZURE INCIDENT KNOWLEDGE

Incident:
VM available in Azure Portal.
RDP inaccessible.
CPU usage high.
VM status running.

Likely Cause:
Guest OS hang, resource exhaustion, or Azure VM Agent issue.

---

Incident:
NSG allows traffic.
Traffic Analytics shows Allowed.
Application still unreachable.

Likely Cause:
Azure Firewall policy issue, Application Gateway issue, backend application failure, or routing issue.

---

Incident:
Recent NSG modification.
Port 3389 inaccessible.

Likely Cause:
NSG rule blocking inbound RDP traffic.

---

Incident:
Traffic not reaching destination.
No NSG denies observed.
Recent UDR modification.

Likely Cause:
Incorrect route table configuration causing traffic blackholing.

---

Incident:
Application intermittently reachable.
Ping successful.
Firewall shows one-way traffic.

Likely Cause:
Asymmetric routing caused by incorrect UDR configuration.

---

Incident:
Traffic reaches Azure Firewall.
Firewall allows traffic.
Backend VM receives no traffic.

Likely Cause:
Backend subnet routing issue or incorrect route association.

---

Incident:
AVD user profile not loading.
FSLogix container failed to mount.
Access denied observed.

Likely Cause:
FSLogix permissions issue or storage account access problem.

---

Incident:
Multiple users unable to launch AVD.
All hosts unavailable.
Issue started after maintenance.

Likely Cause:
Session host registration failure or AVD agent unhealthy.

---

Incident:
AVD disconnects every few minutes.
Only one session host affected.

Likely Cause:
AVD Agent unhealthy or session host instability.

---

Incident:
Session host missing from Host Pool.
Registration status failed.

Likely Cause:
Expired Host Pool registration token.

---

Incident:
AVD login successful.
Black screen after sign-in.
Multiple users affected.

Likely Cause:
FSLogix profile corruption or profile loading delay.

---

Incident:
Session Host visible in Host Pool.
Users unable to connect.

Likely Cause:
Session Host Drain Mode enabled.

---

Incident:
AVD login takes more than 10 minutes.

Likely Cause:
Group Policy processing delay or profile loading issue.

---

Incident:
Disk usage 100%.
Applications failing.
VM inaccessible.

Likely Cause:
OS disk full causing operating system instability.

---

Incident:
VM inaccessible.
Boot diagnostics show startup failures.

Likely Cause:
Corrupted operating system files requiring OS disk repair or swap.

---

Incident:
VM stuck in boot loop after Windows update.

Likely Cause:
Corrupted operating system files after failed patch installation.

---

Incident:
Azure VM Agent unhealthy.

Likely Cause:
VM Agent service crashed or extension failure.

---

Incident:
Disk latency high.
Application response slow.

Likely Cause:
Managed disk performance bottleneck.

---

Incident:
Contributor role assigned.
User still unable to create resources after 24 hours.

Likely Cause:
RBAC scope misconfiguration, deny assignment, PIM activation issue, or incorrect subscription scope.

---

Incident:
Role assignment completed.
User access still denied.

Likely Cause:
PIM activation not completed or deny assignment applied.

---

Incident:
MFA enabled.
User authentication failing.

Likely Cause:
Conditional Access policy blocking sign-in.

---

Incident:
Managed Identity authentication failing.

Likely Cause:
Managed Identity permissions missing or identity disabled.

---

Incident:
Azure Backup unhealthy after new VM onboarding.

Likely Cause:
Backup policy misconfiguration, Recovery Services Vault issue, extension failure, or permission issue.

---

Incident:
Backup job failed.
New VM recently onboarded.

Likely Cause:
Backup policy configuration issue.

---

Incident:
Restore operation failed.

Likely Cause:
Recovery point corruption or permission issue.

---

Incident:
VPN tunnel disconnected.
On-prem users cannot access Azure.

Likely Cause:
Customer firewall public IP changed and Azure VPN Gateway configuration not updated.

---

Incident:
VPN tunnel disconnected after ISP maintenance.

Likely Cause:
Customer public IP changed.

---

Incident:
Application migrated to Azure.
Application crashes after migration.

Likely Cause:
Hardcoded server names or database connection strings.

---

Incident:
ASR failover completed.
Application unavailable.

Likely Cause:
DNS records not updated after migration.

---

Incident:
Load Balancer marks backend unhealthy.
Backend server operational.

Likely Cause:
Health probe blocked by local Windows Firewall.

---

Incident:
Application Gateway backend unhealthy.
Backend VM healthy.

Likely Cause:
Health probe configuration mismatch.

---

Incident:
Outbound connectivity intermittent.
Random application failures.

Likely Cause:
Azure Firewall SNAT port exhaustion.

---

Incident:
Public endpoint accessible.
Private endpoint inaccessible.

Likely Cause:
Private DNS Zone configuration missing or incorrect.

---

Incident:
Storage account accessible through public endpoint.
Private endpoint inaccessible.
DNS resolves to public IP.

Likely Cause:
Private DNS Zone not linked to VNet.

---

Incident:
Storage authentication failures.
Applications cannot access storage account.

Likely Cause:
Storage firewall restrictions blocking source subnet.

---

Incident:
Azure Files share inaccessible.

Likely Cause:
SMB port 445 blocked by firewall or NSG.

---

Incident:
ExpressRoute circuit healthy.
Azure resources unreachable from on-premises.

Likely Cause:
Incorrect BGP route advertisement after network change.

---

Incident:
DNS resolution failing.
Application accessible through IP address.

Likely Cause:
Incorrect DNS server configuration.

---

Incident:
NSG allows traffic.
Packets never reach destination.

Likely Cause:
Incorrect UDR next hop configuration.

---

Incident:
Application intermittently reachable.
Random disconnects observed.

Likely Cause:
Azure Firewall SNAT Port Exhaustion.

---

Incident:
AKS pods restarting continuously.

Likely Cause:
Out Of Memory (OOM) kills caused by low resource limits.

---

Incident:
AKS deployment stuck in Pending state.

Likely Cause:
Insufficient node resources for pod scheduling.

---

Incident:
Database server healthy.
Application timeout errors observed.

Likely Cause:
SQL firewall rules missing application subnet.

---

Incident:
Database connections failing.
Private endpoint configured.

Likely Cause:
Private Endpoint DNS resolution issue.

---

Incident:
Domain login failures.
Group Policy failing.
DNS resolution inconsistent.

Likely Cause:
Domain Controller VM disk full causing AD services failure.

`;