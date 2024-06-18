import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const DeleteModal = ({ showModal, onDelete, tobeDeleted, setShowModal, queryKey, navigateAfterwards }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const closeModal = () => {
    setIsDeleting(false);
    setShowModal(false);
  };

  const { mutate } = useMutation({
    mutationFn: (product) => onDelete(product),
    onSuccess: () => {
      closeModal();
      return queryClient.invalidateQueries(queryKey || ['projects']); // You can use a default queryKey here


    },
    onSettled: () => {
      if (navigateAfterwards) {
        navigate(navigateAfterwards);
      }
    },
    onError: (e) => {
      console.error("Mutation error:", e);
    },
  });

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    mutate(tobeDeleted.id);
  };


  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {t('delete.delete')} {tobeDeleted.name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {t('delete.sure')} {tobeDeleted.name}?
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {t('delete.cancel')}
                  </button>
                  <button
                    className="text-red-500 background-transparent border disabled:cursor-not-allowed border-red-500 ml-3 font-bold uppercase rounded px-6 py-3 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {
                      isDeleting ?
                        <span className="flex justify-center items-center gap-2">
                          <span>{t('delete.deleting')}</span>
                          <Spinner h="h-5" w="w-5" />
                        </span> :
                        <span>{t('delete.delete')}</span>
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Overlay */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default DeleteModal;
