import { mount } from "@vue/test-utils";
import AppModal from "@/components/AppModal";

describe("AppModal", () => {
  it("mounts App modal", () => {
    const comp = mount(AppModal);
    expect(comp).toBeTruthy();
  });
  it("Shows title in the modal", () => {
    const title = "Test title";
    const comp = mount(AppModal, {
      propsData: {
        title
      }
    });
    expect(comp.find("[data-test-id='app-modal-title']").text()).toEqual(title);
  });

  describe("Close button", () => {
    let comp, btn;
    beforeAll(() => {
      //const closeModal = jest.fn();
      comp = mount(AppModal);
      //click on close button
      btn = comp.find("[data-test-id='closeMe']");
    });

    it("Has cancel button with test-id closeMe", () => {
      expect(btn).toBeTruthy();
    });

    it("emits closeModal event when cancel button clicked", () => {
      //click on close button
      btn.trigger("click");
      //inspect if event is emitted
      expect(comp.emitted().closeModal).toBeTruthy();
    });
  });

  describe("YES button", () => {
    let comp, btn;
    beforeAll(() => {
      //const closeModal = jest.fn();
      comp = mount(AppModal);
      //click on close button
      btn = comp.find("[data-test-id='app-modal-btn-yes']");
    });

    it("Has YES button with data-test-id", () => {
      //inspect if event is emitted
      expect(btn).toBeTruthy();
    });

    it("Emits YES event using modalAnswer event", () => {
      //click on YES button
      btn.trigger("click");
      //console.log("modalAnswer...", comp.emitted().modalAnswer);
      //expect that first emitted modalAnswer contains value YES
      expect(comp.emitted().modalAnswer[0]).toContain("YES");
    });
  });

  describe("NO button", () => {
    let comp, btn;
    beforeAll(() => {
      //const closeModal = jest.fn();
      comp = mount(AppModal);
      //click on close button
      btn = comp.find("[data-test-id='app-modal-btn-no']");
    });

    it("Has NO button with data-test-id", () => {
      //console.log(btn)
      //returns empty object wrapper if element is found()
      expect(btn).toEqual({});
    });

    it("Emits NO event using modalAnswer event", () => {
      //click on YES button
      btn.trigger("click");
      //console.log("modalAnswer...", comp.emitted().modalAnswer);
      //expect that first emitted modalAnswer contains value YES
      expect(comp.emitted().modalAnswer[0]).toContain("NO");
    });
  });

  describe("Displays slotted content", () => {
    //const closeModal = jest.fn();
    const slotContent = "<h1 id='test-slot-content'>Test slot</h1>";
    const comp = mount(AppModal, {
      slots: {
        default: slotContent
      }
    });
    const tekst = comp.find("#test-slot-content");
    //console.log(tekst.text());
    expect(tekst.text()).toBeTruthy();
  });

  // describe("Test snaphot, is it usefull?!?", () => {
  //   const slotContent = "<h1 id='test-slot-content'>Test slot</h1>";
  //   const comp = mount(AppModal, {
  //     slots: {
  //       default: slotContent
  //     },
  //     propsData: {
  //       title: "This is the title"
  //     }
  //   });
  //   expect(comp.html()).toMatchSnaphot();
  // });
});
