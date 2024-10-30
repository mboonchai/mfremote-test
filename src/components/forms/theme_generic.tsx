import { useState } from "react"
//import { Transition } from "@headlessui/react"

import Button from "@/components/controls/button"
import GenericSection from "@/components/forms/section"
import ElementItem from './elements';
import GenericForm from "./form";

export default ({ loading, error, form, lang, mode,useI18n,onSubmitSuccess,onSubmitError }: ThemeProps) => {
  let t = null
  if (!useI18n) {
    t = (text: any) => text
  } else {
    t = useI18n()
  }

  const [formSubmitting, setFormSubmitting] = useState(false)

  const refCode = (() => Math.random().toString(16).slice(-8))()

  const onFormSubmitSuccess = (data: any) => {

    console.log("onSubmitSuccess form.serviceCode:" + form.serviceCode + "  form.formId:" +  form.formId)

    if(onSubmitSuccess) { 
      onSubmitSuccess({
         serviceCode: form.serviceCode,
         formId: form.formId
       })
      }

  }

  const onFormSubmitError = (error: any) => {
    if(onSubmitError) {
      onSubmitError(error)
    }
    // alert.show({
    //   title: `Error`,
    //   message: error?.message || '',
    //   type: ALERT_TYPES.DANGER,
    //   preventClickOutside: true,
    //   onClose: () => { }
    // });
  }


  return (
    <>
      <div className="w-full theme-generic ">
        {/* <Transition
          show={mode == "success"}
          enter="transition duration-[400ms]"
          enterFrom="-translate-x-full opacity-0"
          enterTo="-translate-x-0 opacity-100"
          leave="transition duration-200 ease-in-out"
          leaveFrom="-translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
        > */}
        { mode == "success" &&
          <div className="thin-container mx-auto space-y-6 h-dvh ">
            <div className="w-full h-full items-center justify-center">
              <div className="md:rounded-lg bg-white shadow mt-24" >
                <div className="px-4 py-5 sm:px-6">
                  <p className="text-center text-xl font-semibold text-gray-900">ส่งแบบสอบถามสำเร็จ</p>
                  <p className="text-center mt-4 text-gray-700">ขอบคุณที่ตอบแบบสอบถาม</p>
                </div>
              </div>
            </div>
          </div>
}
         {/* </Transition> */}

        {!mode && (
          <div className="thin-container mx-auto space-y-6 h-dvh ">


            {/* It's not suppose to be slow , safe to ignore loading*/}
            {/* {loading &&
              <div className="w-full h-full flex items-center justify-center">
              </div>
            } */}


            {
              !loading && error &&
              <div className="thin-container mx-auto space-y-6 h-dvh ">
                <div className="w-full h-full items-center justify-center">
                  <div className="md:rounded-lg bg-white shadow mt-24" >
                    <div className="px-4 py-5 sm:px-6">
                      <p className="text-center text-xl font-semibold text-gray-900">เกิดความผิดพลาด</p>
                      <p className="text-center mt-4 text-gray-700">{error.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            {!loading && !error && form &&
              <GenericForm refCode={refCode} form={form} onSubmitError={onFormSubmitError} onSubmitSuccess={onFormSubmitSuccess} setLoading={setFormSubmitting}  >
                {({ errors, onChange }) => (
                  <>
                    <div className="w-full">
                      <div className="w-full flex items-center justify-center pt-10 pb-6">
                        <h1 className="text-2xl font-semibold text-gray-900">{form.name}</h1>
                      </div>
                      {form?.sections?.map((section: any, index: number) =>
                        <GenericSection key={index} title={section.name} subtitle={section.description} className="" >
                          {
                            section?.elements?.map((element: IElementItemData, index: number) => {
                              const elementId = element.id || element.name;
                              return (
                                <div key={index + "control-container"}>
                                  <ElementItem
                                    data={element}
                                    error={elementId && errors(elementId)}
                                    onChange={elementId && onChange(elementId)}
                                    disabled={formSubmitting}
                                  />
                                </div>
                              )
                            })
                          }
                        </GenericSection>
                      )}
                    </div>

                    <div className="flex ">
                      <Button type="submit" size="large" className="flex-1 mx-4 md:mx-0" loading={formSubmitting} disabled={formSubmitting} >{t('Submit')}</Button>
                    </div>
                  </>

                )}
              </GenericForm>
            }
          </div>
        )}
      </div>
    </>
  )
}