import lookupsRepository from './lookups.repository';

export default class LookupsPresenter {
  loadGeneralLookups = async (callback) => {
    lookupsRepository.getLookups((lookupPm) => {
      const lookupsVm = {
        areas: lookupPm.areas ?? [],
        districts: lookupPm.districts ?? [],
        states: lookupPm.states ?? [],
        professions: lookupPm.professions ?? [],
        qualifications: lookupPm.qualifications ?? [],
        membershipPeriod: lookupPm.membershipPeriod ?? [],
      };
      callback(lookupsVm);
    });
  };

  loadUserLookups = async (callback) => {
    lookupsRepository.getUserLookups((lookupPm) => {
      const lookupsVm = {
        applicableUserRole: lookupPm.applicableUserRole,
        cascadeData: lookupPm.cascadeData,
        areas: lookupPm.areas ?? [],
        panchayats: this.getPanchayatsVm(lookupPm.panchayats ?? []),
        cascadeTitle: lookupPm.cascadeTitle,
      };

      console.log('lookupVm:', lookupsVm);
      callback(lookupsVm);
    });
  };

  loadProfessions = async (callback) => {
    lookupsRepository.getProfessions((professionsPm) => {
      const professionsVm = {
        professions: professionsPm.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        }),
      };
      callback(professionsVm);
    });
  };

  loadQualifications = async (callback) => {
    lookupsRepository.getQualifications((qualificationsPm) => {
      const qualificationsVm = {
        qualifications: qualificationsPm.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        }),
      };
      callback(qualificationsVm);
    });
  };

  loadRegisteredOrganizations = async (callback) => {
    lookupsRepository.getRegisteredOrganizations((organizationsPm) => {
      const organizationsVm = organizationsPm;
      callback(organizationsVm);
    });
  };

  loadWelfareSchemes = async (callback) => {
    lookupsRepository.getWelfareSchemes((schemesPm) => {
      const schemesVm = schemesPm;
      callback(schemesVm);
    });
  };

  getPanchayatsVm = (panchayats) => {
    if (panchayats.length) {
      return panchayats.map((item) => {
        return {
          id: item.id,
          name: item.name,
          mandalam: item.mandalam,
        };
      });
    } else {
      return [];
    }
  };
}
