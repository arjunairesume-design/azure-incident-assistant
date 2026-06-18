import { ISSUE_CATEGORIES } from '../constants';

export default function IncidentForm({
  form,
  onChange,
  onSubmit,
  loading
}) {
  const subTypes =
    ISSUE_CATEGORIES[form.issueCategory] || [];

  function handleChange(field) {
    return (e) =>
      onChange({
        ...form,
        [field]: e.target.value
      });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card space-y-5"
    >
      {/* Classification */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Issue Category
          </label>

          <select
            value={form.issueCategory}
            onChange={(e) =>
              onChange({
                ...form,
                issueCategory: e.target.value,
                issueType:
                  ISSUE_CATEGORIES[e.target.value][0]
              })
            }
            className="input-field"
          >
            {Object.keys(ISSUE_CATEGORIES).map(
              (category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Issue Type
          </label>

          <select
            value={form.issueType}
            onChange={handleChange('issueType')}
            className="input-field"
          >
            {subTypes.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resource Details */}
      <div className="grid gap-5 sm:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Subscription
          </label>

          <input
            type="text"
            value={form.subscription}
            onChange={handleChange('subscription')}
            className="input-field"
            placeholder="Production Subscription"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Region
          </label>

          <input
            type="text"
            value={form.region || ''}
            onChange={handleChange('region')}
            className="input-field"
            placeholder="East US"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Resource Group
          </label>

          <input
            type="text"
            value={form.resourceGroup}
            onChange={handleChange('resourceGroup')}
            className="input-field"
            placeholder="rg-prod-network"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Resource Name
          </label>

          <input
            type="text"
            value={form.resourceName}
            onChange={handleChange('resourceName')}
            className="input-field"
            placeholder="vm-prod-eastus-01"
          />
        </div>
      </div>

      <div>
  <label className="mb-1.5 block text-sm font-medium text-slate-700">
    User Login ID
  </label>

  <input
    type="text"
    value={form.userLoginId || ''}
    onChange={handleChange('userLoginId')}
    className="input-field"
    placeholder="user@company.com"
  />
</div>      
      {/* VM Evidence */}
      {form.issueCategory ===
        'Virtual Machine' && (
        <div className="space-y-5 border-t pt-5">
          <h3 className="text-lg font-semibold text-slate-800">
            Investigation Evidence
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                CPU Utilization (%)
              </label>

              <input
                type="text"
                value={
                  form.cpuUtilization || ''
                }
                onChange={handleChange(
                  'cpuUtilization'
                )}
                className="input-field"
                placeholder="95"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Memory Utilization (%)
              </label>

              <input
                type="text"
                value={
                  form.memoryUtilization ||
                  ''
                }
                onChange={handleChange(
                  'memoryUtilization'
                )}
                className="input-field"
                placeholder="90"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Disk Utilization (%)
              </label>

              <input
                type="text"
                value={
                  form.diskUtilization || ''
                }
                onChange={handleChange(
                  'diskUtilization'
                )}
                className="input-field"
                placeholder="85"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Boot Diagnostics
              </label>

              <select
                value={
                  form.bootDiagnostics || ''
                }
                onChange={handleChange(
                  'bootDiagnostics'
                )}
                className="input-field"
              >
                <option value="">
                  Select
                </option>
                <option value="Healthy">
                  Healthy
                </option>
                <option value="Failed">
                  Failed
                </option>
                <option value="Unknown">
                  Unknown
                </option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Storage Evidence */}
      {form.issueCategory ===
        'Storage and Backup' && (
        <div className="space-y-5 border-t pt-5">
          <h3 className="text-lg font-semibold text-slate-800">
            Storage Evidence
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Authentication Error
              </label>

              <input
                type="text"
                value={
                  form.authenticationError ||
                  ''
                }
                onChange={handleChange(
                  'authenticationError'
                )}
                className="input-field"
                placeholder="AuthorizationFailure"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Firewall Enabled
              </label>

              <select
                value={
                  form.firewallEnabled || ''
                }
                onChange={handleChange(
                  'firewallEnabled'
                )}
                className="input-field"
              >
                <option value="">
                  Select
                </option>
                <option value="Yes">
                  Yes
                </option>
                <option value="No">
                  No
                </option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Private Endpoint
              </label>

              <select
                value={
                  form.privateEndpoint || ''
                }
                onChange={handleChange(
                  'privateEndpoint'
                )}
                className="input-field"
              >
                <option value="">
                  Select
                </option>
                <option value="Yes">
                  Yes
                </option>
                <option value="No">
                  No
                </option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Storage Reachable
              </label>

              <select
                value={
                  form.storageReachable || ''
                }
                onChange={handleChange(
                  'storageReachable'
                )}
                className="input-field"
              >
                <option value="">
                  Select
                </option>
                <option value="Yes">
                  Yes
                </option>
                <option value="No">
                  No
                </option>
              </select>
            </div>
          </div>
        </div>
      )}

{/* IAM Evidence */}
{form.issueCategory === 'IAM - Access Management' && (
  <div className="space-y-5 border-t pt-5">
    <h3 className="text-lg font-semibold text-slate-800">
      IAM Evidence
    </h3>

    <div className="grid gap-5 sm:grid-cols-2">

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          User Login ID
        </label>
        <input
          type="text"
          value={form.userLoginId || ''}
          onChange={handleChange('userLoginId')}
          className="input-field"
          placeholder="user@company.com"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Role Name
        </label>
        <input
          type="text"
          value={form.roleName || ''}
          onChange={handleChange('roleName')}
          className="input-field"
          placeholder="Contributor"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Resource Scope
        </label>
        <input
          type="text"
          value={form.resourceScope || ''}
          onChange={handleChange('resourceScope')}
          className="input-field"
          placeholder="Subscription"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Authentication Error
        </label>
        <input
          type="text"
          value={form.authenticationError || ''}
          onChange={handleChange('authenticationError')}
          className="input-field"
          placeholder="AADSTS50020"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          MFA Enabled
        </label>
        <select
          value={form.mfaEnabled || ''}
          onChange={handleChange('mfaEnabled')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Conditional Access Applied
        </label>
        <select
          value={form.conditionalAccess || ''}
          onChange={handleChange('conditionalAccess')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

    </div>
  </div>
)}

{/* AVD Evidence */}
{form.issueCategory === 'Azure Virtual Desktop' && (
  <div className="space-y-5 border-t pt-5">
    <h3 className="text-lg font-semibold text-slate-800">
      AVD Evidence
    </h3>

    <div className="grid gap-5 sm:grid-cols-2">

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          User ID
        </label>
        <input
          type="text"
          value={form.userID || ''}
          onChange={handleChange('userID')}
          className="input-field"
          placeholder="user@company.com"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Host Pool
        </label>
        <input
          type="text"
          value={form.hostPool || ''}
          onChange={handleChange('hostPool')}
          className="input-field"
          placeholder="AVD-Prod-Pool"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Session Host
        </label>
        <input
          type="text"
          value={form.sessionHost || ''}
          onChange={handleChange('sessionHost')}
          className="input-field"
          placeholder="avd-host-01"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          FSLogix Status
        </label>
        <select
          value={form.fslogixStatus || ''}
          onChange={handleChange('fslogixStatus')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Healthy">Healthy</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          AVD Agent Status
        </label>
        <select
          value={form.agentStatus || ''}
          onChange={handleChange('agentStatus')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Healthy">Healthy</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          User Connection
        </label>
        <select
          value={form.connectionStatus || ''}
          onChange={handleChange('connectionStatus')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Success">Success</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

    </div>
  </div>
)}

{/* Application Evidence */}
{form.issueCategory === 'Application Platform' && (
  <div className="space-y-5 border-t pt-5">
    <h3 className="text-lg font-semibold text-slate-800">
      Application Evidence
    </h3>

    <div className="grid gap-5 sm:grid-cols-2">

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Application URL
        </label>
        <input
          type="text"
          value={form.applicationUrl || ''}
          onChange={handleChange('applicationUrl')}
          className="input-field"
          placeholder="https://app.company.com"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          HTTP Status Code
        </label>
        <input
          type="text"
          value={form.httpStatusCode || ''}
          onChange={handleChange('httpStatusCode')}
          className="input-field"
          placeholder="500"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Backend Reachable
        </label>
        <select
          value={form.backendReachable || ''}
          onChange={handleChange('backendReachable')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Database Connectivity
        </label>
        <select
          value={form.databaseConnectivity || ''}
          onChange={handleChange('databaseConnectivity')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Connected">Connected</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          App Service Status
        </label>
        <select
          value={form.appServiceStatus || ''}
          onChange={handleChange('appServiceStatus')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Running">Running</option>
          <option value="Stopped">Stopped</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Error Message
        </label>
        <input
          type="text"
          value={form.errorMessage || ''}
          onChange={handleChange('errorMessage')}
          className="input-field"
          placeholder="503 Service Unavailable"
        />
      </div>

    </div>
  </div>
)}

{/* Network Evidence */}
{form.issueCategory === 'Virtual Network' && (
  <div className="space-y-5 border-t pt-5">
    <h3 className="text-lg font-semibold text-slate-800">
      Network Evidence
    </h3>

    <div className="grid gap-5 sm:grid-cols-2">

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Source IP
        </label>
        <input
          type="text"
          value={form.sourceIp || ''}
          onChange={handleChange('sourceIp')}
          className="input-field"
          placeholder="10.1.1.10"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Destination IP
        </label>
        <input
          type="text"
          value={form.destinationIp || ''}
          onChange={handleChange('destinationIp')}
          className="input-field"
          placeholder="10.2.1.20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Port
        </label>
        <input
          type="text"
          value={form.port || ''}
          onChange={handleChange('port')}
          className="input-field"
          placeholder="443"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Protocol
        </label>
        <select
          value={form.protocol || ''}
          onChange={handleChange('protocol')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="TCP">TCP</option>
          <option value="UDP">UDP</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          NSG Result
        </label>
        <select
          value={form.nsgResult || ''}
          onChange={handleChange('nsgResult')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Allow">Allow</option>
          <option value="Deny">Deny</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Next Hop Result
        </label>
        <input
          type="text"
          value={form.nextHopResult || ''}
          onChange={handleChange('nextHopResult')}
          className="input-field"
          placeholder="Virtual Appliance / Internet / VNet"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Firewall Result
        </label>
        <select
          value={form.firewallResult || ''}
          onChange={handleChange('firewallResult')}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Allowed">Allowed</option>
          <option value="Blocked">Blocked</option>
        </select>
      </div>

    </div>
  </div>
)}

<div>
  <label className="mb-1.5 block text-sm font-medium text-slate-700">
    Screenshot Attachment
  </label>

  <input
    type="file"
    accept="image/*"
    className="input-field"
    onChange={(e) =>
      onChange({
        ...form,
        screenshot: e.target.files[0]
      })
    }
  />
</div>
      {/* Incident Description */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Incident Description
        </label>

        <textarea
          rows="6"
          value={form.incident}
          onChange={handleChange('incident')}
          className="input-field"
          placeholder="Describe the Azure incident..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Analyzing...' : 'Analyze Incident'}
      </button>

      <p className="text-xs text-center text-slate-500">
          Security Notice: Do not enter passwords, secrets,
          access keys, certificates, tokens, or customer-sensitive information.
      </p>
        
    </form>
  );
}