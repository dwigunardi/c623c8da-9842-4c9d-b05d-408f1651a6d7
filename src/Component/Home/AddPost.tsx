"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";

interface addPostData {
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

export default function AddPost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (
    <>
      <Button onPress={onOpen}>Add Post</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Post
              </ModalHeader>
              <ModalBody>
                <form
                  action=""
                  className="flex w-full flex-wrap md:flex-nowrap gap-4"
                >
                  <Input type="text" label="Title" name="title" />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className="w-full"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
