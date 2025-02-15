import { StaticDataApplicationOptionsApiService } from "../api/generated/apis/static-data-application-options-api";
import { StaticDataCloudProviderOptionsApiService } from "../api/generated/apis/static-data-cloud-provider-options-api";
import { StaticDataCloudProviderServiceInstancesApiService } from "../api/generated/apis/static-data-cloud-provider-service-instances-api";
import { StaticDataCloudProviderServicesApiService } from "../api/generated/apis/static-data-cloud-provider-services-api";
import { StaticDataCronJobOptionsApiService } from "../api/generated/apis/static-data-cron-job-options-api";
import { StaticDataEnvironmentOptionsApiService } from "../api/generated/apis/static-data-environment-options-api";
import { StaticDataNetworkRuleOptionsApiService } from "../api/generated/apis/static-data-network-rule-options-api";
import { StaticDataPermissionsApiService } from "../api/generated/apis/static-data-permissions-api";
import { StaticDataResourceTypesApiService } from "../api/generated/apis/static-data-resource-types-api";
import { StaticDataServerOptionsApiService } from "../api/generated/apis/static-data-server-options-api";
import { StaticDataServiceOptionsApiService } from "../api/generated/apis/static-data-service-options-api";
import { StaticDataSourceProviderOptionsApiService } from "../api/generated/apis/static-data-source-provider-options-api";
import { StaticDataUserProfileOptionsApiService } from "../api/generated/apis/static-data-user-profile-options-api";

export class StaticService {
  public applicationOptions = new StaticDataApplicationOptionsApiService();
  public cloudProviderOptions = new StaticDataCloudProviderOptionsApiService();
  public cloudProviderServiceInstances = new StaticDataCloudProviderServiceInstancesApiService();
  public cloudProviderServices = new StaticDataCloudProviderServicesApiService();
  public cronJobOptions = new StaticDataCronJobOptionsApiService();
  public environmentOptions = new StaticDataEnvironmentOptionsApiService();
  public networkRuleOptions = new StaticDataNetworkRuleOptionsApiService();
  public permissions = new StaticDataPermissionsApiService();
  public resourceTypes = new StaticDataResourceTypesApiService();
  public serverOptions = new StaticDataServerOptionsApiService();
  public serviceOptions = new StaticDataServiceOptionsApiService();
  public sourceProviderOptions = new StaticDataSourceProviderOptionsApiService();
  public userProfileOptions = new StaticDataUserProfileOptionsApiService();
}
