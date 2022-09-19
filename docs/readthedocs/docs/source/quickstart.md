# Quick Start

## How to Use?

To give Occlum a quick try, one can use the Occlum Docker image by following the steps below:

Step 1-3 are to be done on the host OS (Linux):

1. Install [Intel SGX driver for Linux](https://github.com/intel/linux-sgx-driver), which is required by Intel SGX SDK.

2. Install [enable_rdfsbase kernel module](https://github.com/occlum/enable_rdfsbase), which enables Occlum to use `rdfsbase`-family instructions in enclaves.

3. Run the Occlum Docker container, which has Occlum and its demos preinstalled:
    For DCAP driver before v1.41:
    ```bash
    docker run -it --device /dev/sgx/enclave --device /dev/sgx/provision occlum/occlum:[version]-ubuntu20.04
    ```

    For DCAP driver since v1.41 or in-tree kernel driver:
    ```bash
    # 1. Create softlinks on host
    mkdir -p /dev/sgx
    ln -sf ../sgx_enclave /dev/sgx/enclave
    ln -sf ../sgx_provision /dev/sgx/provision

    # 2. Create container in two methods:
    # (1) With privileged mode
    docker run -it --privileged -v /dev/sgx:/dev/sgx occlum/occlum:[version]-ubuntu20.04

    # (1) With non-privileged mode
    docker run -it --device /dev/sgx/enclave --device /dev/sgx/provision occlum/occlum:[version]-ubuntu20.04
    ```

Step 4-5 are to be done on the guest OS running inside the Docker container:

4. (Optional) Try the sample code of Intel SGX SDK to make sure that SGX is working
    ```
    cd /opt/intel/sgxsdk/SampleCode/SampleEnclave && make && ./app
    ```
5. Check out Occlum's demos preinstalled at `/root/demos`. Or you can try to build and run your own SGX-protected applications using Occlum as shown in the demos.

