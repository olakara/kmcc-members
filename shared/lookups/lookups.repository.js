import { config } from '../../shared/constants';
import httpGateway from '../../shared/http-gateway';
import Observable from '../../shared/observable';

class LookupsRepository {
  generalLookupsProgrammersModel = null;
  userLookupsProgrammersModel = null;
  professionsProgrammersModel = null;
  qualificationsProgrammersModel = null;
  registeredOrganizationsProgrammersModel = null;
  welfareSchemesProgrammersModel = null;

  constructor() {
    this.generalLookupsPogrammersModel = new Observable({});
    this.userLookupsProgrammersModel = new Observable({});
    this.professionsProgrammersModel = new Observable([]);
    this.qualificationsProgrammersModel = new Observable([]);
    this.registeredOrganizationsProgrammersModel = new Observable([]);
    this.welfareSchemesProgrammersModel = new Observable([]);
  }

  getLookups = async (callback) => {
    this.generalLookupsPogrammersModel.subscribe(callback);
    await this.loadGeneralLookupsData();
    this.generalLookupsPogrammersModel.notify();
  };

  getUserLookups = async (callback) => {
    this.userLookupsProgrammersModel.subscribe(callback);
    await this.loadUserLookups();
    this.userLookupsProgrammersModel.notify();
  };

  getProfessions = async (callback) => {
    this.professionsProgrammersModel.subscribe(callback);
    await this.loadProfessions();
    this.professionsProgrammersModel.notify();
  };

  getQualifications = async (callback) => {
    this.qualificationsProgrammersModel.subscribe(callback);
    await this.loadQualifications();
    this.qualificationsProgrammersModel.notify();
  };

  getRegisteredOrganizations = async (callback) => {
    this.registeredOrganizationsProgrammersModel.subscribe(callback);
    await this.loadRegisteredOrganizations();
    this.registeredOrganizationsProgrammersModel.notify();
  };

  getWelfareSchemes = async (callback) => {
    this.welfareSchemesProgrammersModel.subscribe(callback);
    await this.loadWelfareSchemes();
    this.welfareSchemesProgrammersModel.notify();
  };

  loadGeneralLookupsData = async () => {
    const lookupsDto = await httpGateway.get(config.BASE_URL + 'lookups/');
    this.generalLookupsPogrammersModel.value = lookupsDto;
  };

  loadUserLookups = async () => {
    const lookupsDto = await httpGateway.get(config.BASE_URL + 'lookups/me');
    this.userLookupsProgrammersModel.value = lookupsDto;
  };

  loadProfessions = async () => {
    const professionsDto = await httpGateway.get(config.BASE_URL + 'professions');
    this.professionsProgrammersModel.value = professionsDto;
  };

  loadQualifications = async () => {
    const qualificationsDto = await httpGateway.get(config.BASE_URL + 'qualifications');
    this.qualificationsProgrammersModel.value = qualificationsDto;
  };

  loadRegisteredOrganizations = async () => {
    const organizationsDto = await httpGateway.get(config.BASE_URL + 'registeredOrganizations');
    this.registeredOrganizationsProgrammersModel.value = organizationsDto;
  };

  loadWelfareSchemes = async () => {
    const schemesDto = await httpGateway.get(config.BASE_URL + 'welfareSchemes');
    this.welfareSchemesProgrammersModel.value = schemesDto;
  };
}

const lookupsRepository = new LookupsRepository();
export default lookupsRepository;
